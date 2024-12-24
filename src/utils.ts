export const calculateDiscount = (price: number, percent: number) => {
    return price - (price * percent) / 100
}
