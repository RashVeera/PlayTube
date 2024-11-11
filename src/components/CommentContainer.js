import React from "react";
import user from "../assets/user-icon.png";

const commentData = [
  { name: "rashika", comment: "Hello how are you?", replies: [] },
  {
    name: "rashika",
    comment: "Hello how are you?",
    replies: [
      {
        name: "rashika1",
        comment: "Hello how are you?",
        replies: [
          {
            name: "rashika2",
            comment: "Hello how are you?",
            replies: [
              {
                name: "rashika3",
                comment: "Hello how are you?",
                replies: [
                  {
                    name: "rashika4",
                    comment: "Hello how are you?",
                    replies: [],
                  },
                  {
                    name: "rashika",
                    comment: "Hello how are you?",
                    replies: [],
                  },
                  {
                    name: "rashika",
                    comment: "Hello how are you?",
                    replies: [],
                  },
                ],
              },
              { name: "rashika", comment: "Hello how are you?", replies: [] },
              { name: "rashika", comment: "Hello how are you?", replies: [] },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "rashika",
    comment: "Hello how are you?",
    replies: [
      {
        name: "rashika",
        comment: "Hello how are you?",
        replies: [
          { name: "rashika", comment: "Hello how are you?", replies: [] },
          {
            name: "rashika5",
            comment: "Hello how are you?",
            replies: [
              { name: "rashika", comment: "Hello how are you?", replies: [] },
              { name: "rashika", comment: "Hello how are you?", replies: [] },
            ],
          },
          { name: "rashika6", comment: "Hello how are you?", replies: [] },
        ],
      },
      { name: "rashika7", comment: "Hello how are you?", replies: [] },
    ],
  },
];

const Comment = ({ comments_data }) => {
  return (
    <div className="flex mt-8 text-white  mb-2 p-2">
      <img
        className="rounded-full w-9 h-9 mx-1 mt-2"
        alt="user-icon"
        src={user}
      />
      <div className="ml-3">
        <span className="text-md font-mono">{comments_data.name}</span>
        <span className="block text-sm">{comments_data.comment}</span>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div className="-mt-5">
      {comments.map((each_comment, index) => (
        <div key={index}>
          <Comment comments_data={each_comment} />
          <div className="ml-9">
            <CommentList comments={each_comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div className="mt-2">
      <span>Comments:</span>

      {<CommentList comments={commentData} />}
    </div>
  );
};

export default CommentContainer;
