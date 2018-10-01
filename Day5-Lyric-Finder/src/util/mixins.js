export const isEmptyObject = {
    methods: {
        isEmptyObject (obj) {
            return obj === undefined || Object.keys(obj).length === 0;
        }
    }
};
