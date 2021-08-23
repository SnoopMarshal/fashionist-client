import axios from 'axios';
import authHeader from '../utils/AuthToken';

const API_URL = 'http://localhost:5000/api/cart';

class CartService {
  constructor() {
    this.persistantState = JSON.parse(localStorage.getItem('persistantState'));
    if (this.persistantState) {
      this.userId = this.persistantState.auth.user.id;

    }
  }
  addItemToCart(payload) {
    this.persistantState = JSON.parse(localStorage.getItem('persistantState'));
      this.userId = this.persistantState.auth.user.id;
    const payloadData = {
      userId: this.userId,
      product: {
        productId: payload.item._id,
        qty: payload.qty
      }
    }
    return axios.post(API_URL, payloadData, { headers: authHeader() });
  }
  removeItemFromCart(payload) {
    this.persistantState = JSON.parse(localStorage.getItem('persistantState'));
      this.userId = this.persistantState.auth.user.id;
    const payloadData = {
      userId: this.userId,
      productId: payload
    }
    return axios.post(API_URL + '/remove', payloadData, { headers: authHeader() });
  }
}

export default new CartService();