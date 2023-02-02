import { ICON_TYPE_MAP } from "../../constans/icon-type-map"

import { AppOptionLinksListCategory } from "../../models/interfaces/app/app-option-link/app-option-links-list-category"
import { User } from "../../models/interfaces/user/user"

import { userService } from "../../services/user/user-service"
import { makeId } from "../../services/util/make-id"

import { logout as logoutUser } from "../../store/action/user-action"


const loggedUser = userService.getLoggedinUser() as User


export const OPTION_BAR: AppOptionLinksListCategory[] = [
    {
        id: makeId(),
        icon: ICON_TYPE_MAP.appHeaderOptionLink.helpful,
        title: 'אפשרויות',
        childrens: [
            {
                id: makeId(),
                text: 'שינויים אחרונים',
                path: '/מעקב: שינויים אחרונים',
                isRelative: false
            },
            {
                id: makeId(),
                text: 'העלאת תמונות',
                path: '/העלאת תמונות',
                isRelative: false
            }
        ]
    },
    {
        id: makeId(),
        icon: ICON_TYPE_MAP.appHeaderOptionLink.action,
        title: 'עריכה',
        childrens: [
            {
                id: makeId(),
                text: 'עריכה',
                path: '/save',
                isRelative: true,
                restriction: {
                    pageTypes: ['entity-item-details'],
                    users: ['logged-real-user']
                },
            },
            {
                id: makeId(),
                text: 'הוספה',
                path: '/save',
                isRelative: true,
                restriction: {
                    pageTypes: ['entity-item-portal'],
                    users: ['logged-real-user']
                },
            },
            {
                id: makeId(),
                text: 'שיחה',
                path: 'שיחה',
                isRelative: true
            },
            {
                id: makeId(),
                text: 'גרסאות קודמות',
                path: 'יומן גרסאות',
                isRelative: false
            },
            {
                id: makeId(),
                text: 'מחיקה',
                path: '/remove',
                isRelative: true,
                restriction: {
                    pageTypes: ['entity-item-details'],
                    users: ['logged-real-user']
                },
            },
        ]
    },
    {
        id: makeId(),
        icon: ICON_TYPE_MAP.appHeaderOptionLink.user,
        title: 'משתמש',
        childrens: [
            {
                id: makeId(),
                text: 'התחבר למערכת',
                path: '/login-signup',
                isRelative: false,
                restriction: {
                    users: ['no-logged-real-user']
                }
            },
            {
                id: makeId(),
                text: (loggedUser?.client?.name?.display || 'פרטי משתמש'),
                path: '/user/' + loggedUser?._id,
                isRelative: false,
                restriction: {
                    users: ['logged-real-user']
                }
            },
            {
                id: makeId(),
                text: 'הודעות פרטיות',
                path: `/user/${loggedUser?._id}/inbox`,
                isRelative: false,
                restriction: {
                    users: ['logged-real-user']
                }
            },
            {
                id: makeId(),
                text: 'הגדרות מערכת',
                path: `/user/${loggedUser?._id}/setting`,
                isRelative: false,
                restriction: {
                    users: ['logged-real-user']
                }
            },
            {
                id: makeId(),
                text: 'התנתק',
                path: '#',
                action: logoutUser,
                isRelative: false,
                restriction: {
                    users: ['logged-real-user']
                }
            },
        ]
    }
]