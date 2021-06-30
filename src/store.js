import create from "zustand";
const useStore = create((set, get) => ({
  guestData: { username: "", password: "", basket: [] },
  signInUser: (userInfo) => {
    set({ username: userInfo.name, password: userInfo.password });
  },
  addToBasket: (basketInfo) => {
    set({ basket: [...get().guestData.basket, basketInfo] });
  },
  deleteBasket: (basketInfo) => {
    let filteredBaskets = get().guestData.basket.filter(
      (basket) => basket.title !== basketInfo.title
    );
    set({ basket: [...get().guestData.basket, filteredBaskets] });
  },
}));
