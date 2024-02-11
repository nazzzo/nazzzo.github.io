import { useState } from 'react';
import { Button } from "@components/common/button/button"
import { Icon } from "@iconify/react"


type CommentData = {
    user: string;
    userImg: string;
    boardId: number;
    commentId: string;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
};

const dummyComments:CommentData[] = [
    {
        user: "farkhod",
        userImg: "http://127.0.0.1:3000/default-image.png",
        boardId: 1,
        commentId: "1",
        comment: "댓글1 댓글1 댓글1 댓글1 댓글1 댓글1",
        createdAt: new Date(),
        updatedAt: new Date(),
    }, 
    {
        user : "김주형",
        userImg: "http://127.0.0.1:3000/default-image.png",
        boardId: 1,
        commentId: "2",
        comment : "댓글2 댓글2 댓글2 댓글2 댓글2 댓글2 댓글2 댓글2",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        user : "김희제",
        userImg: "http://127.0.0.1:3000/default-image.png",
        boardId: 1,
        commentId: "1-1",
        comment : "대댓글1 대댓글1 대댓글1 대댓글1 대댓글1 대댓글1 대댓글1",
        createdAt: new Date(),
        updatedAt: new Date(),
    }, 
]

const Comment = ({ comment, parentCommentId }: { comment: CommentData, parentCommentId?: string }) => {
    const isSubComment = comment.commentId.includes('-'); // 대댓글 체크
    const isChildComment = parentCommentId && comment.commentId.startsWith(parentCommentId);
    
    return (
        <div className={`p-6 mb-4 text-base rounded-lg dark:bg-gray-800 bg-gray-100 ${isSubComment ? 'ml-6' : ''}`}>
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                        <img
                            className="mr-2 w-6 h-6 rounded-full"
                            src={comment.userImg}
                            alt="" />
                            {comment.user}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{comment.createdAt.toDateString()}</p>
                </div>
                <button id={`dropdown${comment.commentId}Button`} data-dropdown-toggle={`dropdown${comment.commentId}`}
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-gray-100 rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button">
                    <Icon icon="tabler:dots" className="text-lg" />
                </button>
            </div>
            <p className="text-gray-500 dark:text-gray-400">{comment.comment}</p>
            <div className="flex items-center mt-4 space-x-4">
                {!isChildComment && (
                    <button type="button"
                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                        <Icon icon="tabler:message-reply" className="mr-1 text-md" />
                        Reply
                    </button>
                )}
            </div>
        </div>
    )
}

export const CommentBox = () => {
    return (
        <section className="py-8 lg:py-16 antialiased">
            <div className="max-w-3xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">나도 한마디 ({dummyComments.length})</h2>
                </div>
                <form className="mb-4">
                    <div className="py-2 px-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <textarea id="comment"
                            className="px-0 w-full text-md text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="내용을 입력해주세요">
                        </textarea>
                    </div>
                    <div className="flex justify-end md:pt-4 mb-10">
                        <Button color="red" size="w-32">
                            <div className="flex items-center justify-center font-bold text-md">
                                <Icon icon="lets-icons:comment" className="text-xl mr-2" />
                                등록하기
                            </div>
                        </Button>
                    </div>
                </form>
                {dummyComments.map((parentComment, index) => (
                    <div key={parentComment.commentId}>
                        <Comment comment={parentComment} />
                        {dummyComments
                            .filter(comment => comment.commentId.startsWith(parentComment.commentId + '-'))
                            .map((childComment, childIndex) => (
                                <Comment key={childIndex} comment={childComment} parentCommentId={parentComment.commentId} />
                            ))}
                    </div>
                ))}
            </div>
        </section>
    )
}