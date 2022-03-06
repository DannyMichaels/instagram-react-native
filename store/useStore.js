import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ASYNC_STORAGE_COMMENTS_KEY = ' ASYNC_STORAGE_COMMENTS_KEY';

export const useStore = create(
  devtools(
    persist(
      (set, get) => ({
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
          const currentPostComments =
            get().allComments[get().selectedItemId] || [];

          set((state) => ({
            allComments: {
              ...state.allComments,
              [state.selectedItemId]:
                [...currentPostComments, newComment] || [],
            },
          }));
        },
      }),
      {
        name: ASYNC_STORAGE_COMMENTS_KEY,
        getStorage: () => AsyncStorage,
      }
    )
  )
);
