import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useStore = create(
  devtools((set, get) => ({
    allComments: {},
    showCommentModal: false,
    selectedItemId: null,

    openCommentScreen: (id) => {
      set({
        showCommentModal: true,
        selectedItemId: id,
      });
    },

    closeCommentScreen: () => {
      set({
        showCommentModal: false,
        selectedItemId: null,
      });
    },

    addComment: (newComment) => {
      const currentPostComments = get().allComments[get().selectedItemId] || [];

      set((state) => ({
        allComments: {
          ...state.allComments,
          [state.selectedItemId]: [...currentPostComments, newComment] || [],
        },
      }));
    },
  }))
);
