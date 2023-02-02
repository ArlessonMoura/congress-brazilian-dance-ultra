import axios from 'axios';
import { useState } from 'react';

function UseRequest({ req }) {
  const { res, setRes } = useState(null);
  const { isLoading, setLoading } = useState(true);

  axios(req)
    .then((response) => setRes(response))
    .catch((error) => console.error(error.message, error))
    .finally(() => setLoading(false));

  // { method: 'get, post, put, delete',
  //   url: '/example',
  //   data: {
  // },
  // responseType?:
  // }

  return { res, isLoading };
}

export default UseRequest;
