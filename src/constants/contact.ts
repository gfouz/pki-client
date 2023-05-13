import axios from 'axios';
import { keyframes } from 'styled-components';

export interface IFormInput {
  name: string;
  email: string;
  message: string;
}
export async function postRequest(data: IFormInput): Promise<IFormInput | any> {
  try {
    const res = await axios.post<IFormInput>(
      'https://formspree.io/f/xdovlonj',
      data
    );
    const { data: result } = res;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}

export const errorMsg = keyframes`
   from {
    background-color: transparent;
   }
   to {
    background-color: red;
   }
  `;
