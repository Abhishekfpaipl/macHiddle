const CartTotal = {
    computed: {
        subtotal() {
            if (this.cartProducts && this.cartProducts.products.length > 0) {
                return this.cartProducts.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
            }
            return 0;
        },
        gstAmount() {
            if (this.cartProducts && this.cartProducts.products.length > 0 && this.cartProducts[0].tax) {
                const subtotal = this.subtotal;
                const gstRate = this.cartProducts[0].tax.gstrate / 100;
                return (subtotal * gstRate).toFixed(2);
            }
            return 0;
        },
        grandTotal() {
            if (this.cartProducts && this.cartProducts.length > 0 && this.cartProducts[0].tax) {
                const subtotal = this.subtotal;
                const gstAmount = parseFloat(this.gstAmount);
                let total = subtotal + gstAmount;
                return total;
            }
            return 0;
        }
    }
}
export default CartTotal