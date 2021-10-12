import {
  PostAnswer,
  PostQuestion,
  RetrievePost,
  PostSaved,
} from "../../api/pathConstants";
import { Request } from "../../api/Request";
import { openSnackbar } from "../snackbar/snackbarActions";
import { getToken, removeTokenRequest } from "../token/tokenActions";
import {
  ADD_POST_DATA,
  ADD_QUESION_DATA,
  ADD_SAVED_DATA,
  DELETE_QUESION_DATA,
} from "./postTypes";

export const addPostDetails = (post) => {
  return {
    type: ADD_POST_DATA,
    post: post,
  };
};

export const retrievePost = (postId) => {
  return async (dispatch, getState) => {
    if (postId in getState().post.posts == false) {
      await dispatch(getToken());
      const token = await getState().token.access;
      const res = await Request("GET", `${RetrievePost}?id=${postId}`, token);
      if (res && res.status === 200) {
        await dispatch(addPostDetails(res.data));
      } else if (res && res.status == 204) {
        await dispatch(openSnackbar("No results found"));
      } else if (res && res.status != 200) {
        await dispatch(openSnackbar("Something went wrong"));
      } else {
        await dispatch(openSnackbar("Network error"));
      }
    }
  };
};

export const addQuestion = (question, postId) => {
  return {
    type: ADD_QUESION_DATA,
    question: question,
    postId: postId,
  };
};

export const askQuestion = (question, postId) => {
  return async (dispatch, getState) => {
    await dispatch(getToken());
    const token = await getState().token.access;
    const data = {
      question: question,
      post: postId,
    };
    const res = await Request("POST", `${PostQuestion}`, token, data);
    if (res && res.status === 201) {
      await dispatch(addQuestion(res.data, postId));
    } else if (res && res.status == 204) {
      await dispatch(openSnackbar("No results found"));
    } else if (res && res.status != 201) {
      await dispatch(openSnackbar("Something went wrong"));
    } else {
      await dispatch(openSnackbar("Network error"));
    }
  };
};

export const deleteQues = (question, postId) => {
  return {
    type: DELETE_QUESION_DATA,
    question: question,
    postId: postId,
  };
};

export const deleteQuestion = (questionId, postId) => {
  return async (dispatch, getState) => {
    const res = await Request(
      "DELETE",
      `${PostQuestion}?post_id=${postId}&question_id=${questionId}`
    );
    if (res && res.status === 200) {
      const q = getState().post.posts[postId].questions;
      let newQ = [];
      q.map((obj) => {
        if (obj.id != questionId) {
          newQ.push(obj);
        }
      });
      await dispatch(deleteQues(newQ, postId));
      await dispatch(openSnackbar("Deleted Successfully"));
    } else if (res && res.status == 204) {
      await dispatch(openSnackbar("No results found"));
    } else if (res && res.status != 200) {
      await dispatch(openSnackbar("Something went wrong"));
    } else {
      await dispatch(openSnackbar("Network error"));
    }
  };
};

export const answerQuestion = (answer, postId, questionId, action) => {
  return async (dispatch, getState) => {
    await dispatch(getToken());
    const token = await getState().token.access;
    const data = {
      id: questionId,
      answer: action == "add" ? answer : "",
      post: postId,
      is_answered: action == "add" ? true : false,
      action: action,
    };
    const res = await Request("PUT", `${PostAnswer}`, token, data);
    if (res && res.status === 200) {
      const q = getState().post.posts[postId].questions;
      let newQ = [];
      q.map((obj) => {
        if (obj.id != questionId) {
          newQ.push(obj);
        } else {
            obj.is_answered = data.is_answered;
            obj.answer = data.answer;
            newQ.push(obj);
          
        }
      });
      await dispatch(deleteQues(newQ, postId));
      await dispatch(
        openSnackbar(
          action == "add"
            ? "Answered Successfully"
            : "Answer deleted successfuly"
        )
      );
    } else if (res && res.status != 200) {
      await dispatch(openSnackbar("Something went wrong"));
    } else {
      await dispatch(openSnackbar("Network error"));
    }
  };
};


export const addSavedData = (value,postId) =>{
  return {
    type:ADD_SAVED_DATA,
    value:value,
    postId:postId,
  }
}



export const PostSave = (postId,userId,verb) => {
  return async (dispatch, getState) => {
    await dispatch(getToken());
    const token = await getState().token.access;
    const data = {
      post:postId,
      user:userId,
    };
    const res = await Request("POST", `${PostSaved}?verb=${verb}`, token, data);
    if (res && res.status === 200) {
      
      await dispatch(addSavedData(verb=="save"?true:false,postId));
      await dispatch(
        openSnackbar(
          verb == "save"
            ? "Added to wishlist"
            : "Removed from wishlist"
        )
      );
    } else if (res && res.status != 200) {
      await dispatch(openSnackbar("Something went wrong"));
    } else {
      await dispatch(openSnackbar("Network error"));
    }
  };
};
