import { createRef } from "react";


// determines whats on our page and how many sections or areas we need
const state = {
    sections: 3,
    pages: 3,
    zoom: 1,
    top: createRef(),
};

export default state;