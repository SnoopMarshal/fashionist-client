import axios from 'axios';
import authHeader from '../utils/AuthToken';

const API_URL = 'http://localhost:5000/api/cart';

class CartService {
    constructor() {
        this.persistantState =  JSON.parse(localStorage.getItem('persistantState'));
        this.userId = this.persistantState.auth.user.id;
    }
  addItemToCart(payload) {
      const payloadData = {
          userId: this.userId,
          product: {
            productId : payload._id,
            qty: 1
          }
      }
    return axios.post(API_URL, payloadData, { headers: authHeader() });
  }
}

export default new CartService();