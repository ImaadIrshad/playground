import * as actions from "./actionTypes"

export const bugAdded = _description => ({
    type: actions.BUG_ADDED,
    payload: {
        description: _description
    }
})

export const bugRemoved = number => ({
    type: actions.BUG_REMOVED,
    payload: {
        id: number
    }
})

export const bugResolved = _id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id: _id
    }
})
