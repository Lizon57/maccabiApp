import { Test1 } from "../pages/test2";
import { makeId } from "../services/util/make-id";

export const APP_ROUTES = [
    {
        id: makeId(),
        path: 'חתימות',
        element: Test1
    }
]