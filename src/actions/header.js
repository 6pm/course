export const changeText = someText => ({
    type: 'CHANGE_TEXT',
    someText,
})

export const saySomething = flag => ({
    type: 'GET_ANSWER',
    flag,
})
