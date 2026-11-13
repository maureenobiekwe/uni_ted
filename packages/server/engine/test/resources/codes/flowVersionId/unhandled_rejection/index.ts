export const code = async () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Promise.reject(new Error('Unhandled rejection from user code'))
    return 'returned ok'
}
