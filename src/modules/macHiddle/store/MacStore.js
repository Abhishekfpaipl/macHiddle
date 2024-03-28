import axiosInstance from "../axiosInstance";
let token = localStorage.getItem('token');
export default {
    namespaced: true,
    state: {
        products: [
            {
                id: 1,
                slug: "wrapped-top-with-tied-straps",
                name: 'Wrapped Top With Tied Straps',
                type: 'Top',
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                stock: true,
                images: [
                    "img/products/productOne/one.webp",
                    "img/products/productOne/two.webp",
                    "img/products/productOne/three.webp",
                    "img/products/productOne/four.webp",
                ],
                price: 1490,
                colors: [
                    {
                        id: 1,
                        img: "img/products/productOne/one.webp",
                        // stock:10,
                    },
                    {
                        id: 2,
                        img: "img/products/productOne/two.webp",
                        // stock:0,
                    },
                    {
                        id: 3,
                        img: "img/products/productOne/three.webp",
                        // stock:5
                    },
                ],
                sizes: [
                    { id: 1, name: 'S', quantity: 1 },
                    { id: 2, name: 'M', quantity: 1 },
                    { id: 3, name: 'L', quantity: 1 },
                    { id: 4, name: 'F', quantity: 1 }
                ],
                selectedQuantity: 1,
            },
            {
                id: 2,
                slug: "sheer-mesh-cropped-placket-blouse",
                name: 'Sheer Mesh Cropped Placket Blouse',
                type: 'Top',
                brand: 'Adidas',
                stock: true,
                images: [
                    "img/products/productTwo/one.webp",
                    "img/products/productTwo/two.webp",
                    "img/products/productTwo/three.webp",
                    "img/products/productTwo/four.webp",
                ],
                price: 1190,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productTwo/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productTwo/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productTwo/three.webp",
                    },
                    {
                        id: 4,
                        img: "img/products/productTwo/four.webp",
                    },
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
            {
                id: 3,
                slug: "cotton-t-shirt-with-slogan",
                name: 'Cotton T-shirt With Slogan',
                type: 'T-shirt',
                brand: 'Noise',
                images: [
                    "img/products/productThree/one.webp",
                    "img/products/productThree/two.webp",
                    "img/products/productThree/three.webp",
                    "img/products/productThree/four.webp",
                    "img/products/productThree/five.webp",
                    "img/products/productThree/six.webp",
                ],
                price: 890,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productThree/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productThree/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productThree/three.webp",
                    },
                    {
                        id: 4,
                        img: "img/products/productThree/four.webp",
                    },
                    {
                        id: 5,
                        img: "img/products/productThree/five.webp",
                    },
                    {
                        id: 6,
                        img: "img/products/productThree/six.webp",
                    }
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
            {
                id: 4,
                slug: "knot-cargo-trousers",
                name: 'Knot Cargo Trousers',
                type: 'Bottoms',
                brand: 'Nivia',
                images: [
                    "img/products/productFour/one.webp",
                    "img/products/productFour/two.webp",
                    "img/products/productFour/three.webp",
                    "img/products/productFour/four.webp",
                ],
                price: 1890,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productFour/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productFour/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productFour/three.webp",
                    },
                    {
                        id: 4,
                        img: "img/products/productFour/four.webp",
                    }
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
            {
                id: 5,
                slug: "pleated-palysuit",
                name: 'Pleated Palysuit',
                type: 'Jumpsuit',
                brand: 'Adidas',
                images: [
                    "img/products/productFive/one.webp",
                    "img/products/productFive/two.webp",
                    "img/products/productFive/three.webp",
                ],
                price: 2690,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productFive/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productFive/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productFive/three.webp",
                    }
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
            {
                id: 6,
                slug: "cut-out-long-slip-dress",
                name: 'Cut Out Long Slip Dress',
                type: 'Slip Dress',
                brand: 'Noise',
                images: [
                    "img/products/productSix/one.webp",
                    "img/products/productSix/two.webp",
                    "img/products/productSix/three.webp",
                    "img/products/productSix/four.webp",
                    "img/products/productSix/five.webp",
                    "img/products/productSix/six.webp",
                    "img/products/productSix/seven.webp",
                ],
                price: 1990,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productSix/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productSix/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productSix/three.webp",
                    },
                    {
                        id: 4,
                        img: "img/products/productSix/four.webp",
                    },
                    {
                        id: 5,
                        img: "img/products/productSix/five.webp",
                    },
                    {
                        id: 6,
                        img: "img/products/productSix/six.webp",
                    },
                    {
                        id: 7,
                        img: "img/products/productSix/seven.webp",
                    }
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
            {
                id: 7,
                slug: "gathered-short-dress-with-twisted-knots",
                name: 'Gathered Short Dress With Twisted Knots',
                type: 'Dress',
                images: [
                    "img/products/productSeven/one.webp",
                    "img/products/productSeven/two.webp",
                    "img/products/productSeven/three.webp",
                    "img/products/productSeven/four.webp",
                    "img/products/productSeven/five.webp",
                    "img/products/productSeven/six.webp",
                    "img/products/productSeven/seven.webp",
                    "img/products/productSeven/eight.webp",
                    "img/products/productSeven/nine.webp",
                    "img/products/productSeven/ten.webp",
                ],
                price: 1790,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productSeven/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productSeven/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productSeven/three.webp",
                    },
                    {
                        id: 4,
                        img: "img/products/productSeven/four.webp",
                    },
                    {
                        id: 5,
                        img: "img/products/productSeven/five.webp",
                    },
                    {
                        id: 6,
                        img: "img/products/productSeven/six.webp",
                    },
                    {
                        id: 7,
                        img: "img/products/productSeven/seven.webp",
                    },
                    {
                        id: 8,
                        img: "img/products/productSeven/eight.webp",
                    },
                    {
                        id: 9,
                        img: "img/products/productSeven/nine.webp",
                    },
                    {
                        id: 10,
                        img: "img/products/productSeven/ten.webp",
                    }
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
            {
                id: 8,
                slug: "gathered-satin-shirt-dress",
                name: 'Gathered Satin Shirt Dress',
                type: 'Shirt Dress',
                images: [
                    "img/products/productEight/one.webp",
                    "img/products/productEight/two.webp",
                    "img/products/productEight/three.webp",
                    "img/products/productEight/four.webp",
                    "img/products/productEight/five.webp",
                    "img/products/productEight/six.webp",
                    "img/products/productEight/seven.webp",
                    "img/products/productEight/eight.webp",
                ],
                price: 1990,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productEight/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productEight/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productEight/three.webp",
                    },
                    {
                        id: 4,
                        img: "img/products/productEight/four.webp",
                    },
                    {
                        id: 5,
                        img: "img/products/productEight/five.webp",
                    },
                    {
                        id: 6,
                        img: "img/products/productEight/six.webp",
                    },
                    {
                        id: 7,
                        img: "img/products/productEight/seven.webp",
                    },
                    {
                        id: 8,
                        img: "img/products/productEight/eight.webp",
                    }
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
            {
                id: 9,
                slug: "cut-out-long-dress-with-beads-and-tassels",
                name: 'Cut Out Long Dress With Beads And Tassels',
                type: 'Dress',
                images: [
                    "img/products/productNine/one.webp",
                    "img/products/productNine/two.webp",
                    "img/products/productNine/three.webp",
                    "img/products/productNine/four.webp",
                    "img/products/productNine/five.webp",
                    "img/products/productNine/six.webp",
                ],
                price: 1990,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productNine/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productNine/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productNine/three.webp",
                    },
                    {
                        id: 4,
                        img: "img/products/productNine/four.webp",
                    },
                    {
                        id: 5,
                        img: "img/products/productNine/five.webp",
                    },
                    {
                        id: 6,
                        img: "img/products/productNine/six.webp",
                    }
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
            {
                id: 10,
                slug: "t-shirt-and-shorts-co-ord-set",
                name: 'T-shirt and Shorts Co-ord Set',
                type: 'Co-ord',
                images: [
                    "img/products/productTen/one.webp",
                    "img/products/productTen/two.webp",
                    "img/products/productTen/three.webp",
                ],
                price: 1890,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productTen/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productTen/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productTen/three.webp",
                    }
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
        ],
        category: [
            {
                id: 1,
                name: 'Knitwear',
                order: '0',
                title: 'Explore Now',
                img: 'img/banners/Knitwear.webp',
                bgColor: '#9CA9BE',
            },
            {
                id: 2,
                name: 'Dresses',
                order: '1',
                title: 'Discover Now',
                img: 'img/banners/Dresses.webp',
                bgColor: '#F37878',
            },
            {
                id: 3,
                name: 'Tops',
                order: '0',
                title: 'Explore Now',
                img: 'img/banners/Tops.webp',
                bgColor: '#966C3B',
            },
            {
                id: 4,
                name: 'T-Shirts',
                order: '1',
                title: 'Explore Now',
                img: 'img/banners/T-Shirts.webp',
                bgColor: '#D7C0AE',
            },
            {
                id: 5,
                name: 'Jumpsuits',
                order: '0',
                title: 'Explore Now',
                img: 'img/banners/Jumpsuits.webp',
                bgColor: '#DFFFD8',
            },
            {
                id: 6,
                name: 'Shirts',
                order: '1',
                title: 'Explore Now',
                img: 'img/banners/Shirts.webp',
                bgColor: '#B4E4FF',
            },
            {
                id: 7,
                name: 'Co-ords',
                order: '0',
                title: 'Explore Now',
                img: 'img/banners/Co-ords.webp',
                bgColor: '#FFACAC',
            },
            {
                id: 8,
                name: 'Bottoms',
                order: '1',
                title: 'Explore Now',
                img: 'img/banners/Bottoms.webp',
                bgColor: '#F8CBA6',
            },
        ],
        categories: [],
        showCategory: [],
        showCategoryFilter: {},
        banners: [],
        product: {},
        collections: [],
        allProducts: [],
        savedProducts: [],
        reviews: [
            {
                id: 1,
                show: false,
                imgr: 'img/users/1.png',
                name: 'Doja',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "Using machiddle.com has given me the opportunity to sell more products, and my customers have increased greatly over the period I joined as a Retailer."'
            },
            {
                id: 2,
                show: false,
                imgr: 'img/users/2.png',
                name: 'Kanye',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
            },
            {
                id: 3,
                show: false,
                imgr: 'img/users/3.png',
                name: 'Travis Scott',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
            },
            {
                id: 4,
                show: false,
                imgr: 'img/users/4.png',
                name: 'Lil pump',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
            },
            {
                id: 5,
                show: false,
                imgr: 'img/users/5.png',
                name: 'Post Malone',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: '  "I have been able to increase my earnings since I joined as a Retailer. I sell almost everything in the app to my contacts and members in different online channels and groups." '
            },
            {
                id: 6,
                show: false,
                imgr: 'img/users/6.png',
                name: 'Travis Scott',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
            },
            {
                id: 7,
                show: false,
                imgr: 'img/users/7.png',
                name: '21 Savage',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
            },
            {
                id: 8,
                show: false,
                imgr: 'img/users/8.png',
                name: 'J.Cole',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
            },
            {
                id: 9,
                show: false,
                imgr: 'img/users/9.png',
                name: 'Lil Wayne',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: '  "I have been able to increase my earnings since I joined as a Retailer. I sell almost everything in the app to my contacts and members in different online channels and groups." '
            },
            {
                id: 10,
                show: false,
                imgr: 'img/users/4.png',
                name: 'Lil pump',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
            },
            {
                id: 11,
                show: false,
                imgr: 'img/users/1.png',
                name: 'Drake',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
            },
            {
                id: 12,
                show: false,
                imgr: 'img/users/10.png',
                name: 'Don Toliver',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
            },
            {
                id: 13,
                show: false,
                imgr: 'img/users/8.png',
                name: 'Pop Smoke',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
            },
            {
                id: 14,
                show: false,
                imgr: 'img/users/6.png',
                name: 'Jack',
                btnName: 'facebook',
                url: 'https://www.facebook.com/yourpage',
                text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
            },
        ],
        action: false,
        searchProducts: [],
        showCollection: [],
        showCollectionFilter: {},
        searchFilters: []
    },
    getters: {
        getProducts: state => state.products,

        getBanners: state => state.banners,
        getCollections: state => state.collections,
        getShowCollection: state => state.showCollection,
        getShowProduct: state => state.product,
        getAllProducts: state => state.allProducts,
        getSavedProducts: state => state.savedProducts,
        getCategories: state => state.categories,
        getShowCategory: state => state.showCategory,
        getCategory: state => state.category,
        getCompletedOrders: state => state.completedOrders,
        getOrders: state => state.orders,
        getReviews: state => state.reviews,
        getSearchProducts: state => state.searchProducts,
        getShowCategoryFilter: state => state.showCategoryFilter,
        getShowCollectionFilter: state => state.showCollectionFilter,
        getSearchFilters: state => state.searchFilters,
    },
    mutations: {
        setBanners(state, data) {
            state.banners = data
        },
        setProduct(state, data) {
            state.product = data
        },
        setAllproducts(state, products) {
            state.allProducts = [...state.allProducts, ...products];
        },
        setCollections(state, data) {
            state.collections = data
        },
        setShowCollection(state, data) {
            state.showCollection = [...state.showCollection, ...data]
        },
        setShowCollectionFilter(state, data) {
            state.showCollectionFilter = { ...state.showCollectionFilter, ...data };
        },
        setFilteredCollection(state, data) {
            state.showCollection = { ...state.showCollection, ...data }
        },
        setWishlist(state, data) {
            state.wishlist = data
        },
        setCategories(state, data) {
            state.categories = data
        },
        setShowCategory(state, data) {
            state.showCategory = [...state.showCategory, ...data]
        },
        setFilteredCategory(state, data) {
            state.showCategory = [...state.showCategory, ...data]
        },
        setShowCategoryFilter(state, data) {
            state.showCategoryFilter = { ...state.showCategoryFilter, ...data };
        },
        toggleReview(state, review) {
            let index = state.reviews.indexOf(review);
            state.reviews.forEach(user_review => {
                user_review.show = false
            });
            state.reviews[index].show = true
        },
        actionDone(state) {
            state.action = true;
        },
        searchProducts(state, data) {
            state.searchProducts = [...state.searchProducts, ...data]
        },
        setSearchFilters(state, data) {
            state.searchFilters = { ...state.searchFilters, ...data }
        },
        setFilteredSearch(state, data) {
            state.searchFilters = { ...state.searchFilters, ...data }
        },
    },
    actions: {
        registerUser({ commit }, data) {
            axiosInstance.post('register', data)
                .then((response) => {
                    commit('actionDone')
                    console.log('data sent', response)
                }).catch((error) => {
                    console.log('error', error)
                })
        },
        forgotPassword({ commit }, data) {
            axiosInstance.post('forgot-password', data)
                .then((response) => {
                    commit('actionDone')
                    console.log(response)
                })
        },
        resetPassword({ commit }, data) {
            axiosInstance.put('user/password', data, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    commit('actionDone', response)
                })
        },
        fetchBanners({ commit }) {
            axiosInstance.get('banners').then(response => {
                // console.log('store', response.data.data)
                commit('setBanners', response.data.data)
            })
                .catch((error) => { console.error('fetchBanners:', error) })
        },
        fetchCollections({ commit }) {
            axiosInstance.get('collections').then(response => {
                console.log('collections', response.data.data)
                commit('setCollections', response.data.data)
            })
        },
        fetchShowCollection({ commit, dispatch }, { collectionId, page }) {
            axiosInstance.get('collections/' + collectionId + '?page=' + page)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setShowCollection', response.data.data.data)
                        dispatch('fetchShowCollectionFilter', { collectionId, page })
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again showCollection');
                });
        },
        fetchShowCollectionFilter({ commit }, { collectionId, page }) {
            console.log('showcatFilter', collectionId, page)
            axiosInstance.get('collections/' + collectionId + '?page=' + page)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setShowCollectionFilter', response.data.data.extraData)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again showCategoryFilter');
                });
        },
        fetchProduct({ commit }, data) {
            axiosInstance.get('products/' + data).then(response => {
                commit('setProduct', response.data.data)
            })
        },
        fetchProducts({ commit }, page) {
            axiosInstance.get(`products?page=${page}`).then((response) => {
                if (response.data.status === 'ok') {
                    const products = response.data.data.data;
                    if (products.length > 0) {
                        commit('setAllproducts', products);
                    } else {
                        console.warn('No products found in response.');
                    }
                } else if (response.data.status === 'error') {
                    alert(response.data.message);
                } else {
                    alert('Something went wrong! Please try again');
                }
            });
        },

        // fetchProducts({ commit }, data) {
        //     axiosInstance.get('products', {
        //         params: {
        //             page: data.page,
        //             search: data.search
        //         },
        //         headers: { "Authorization": `Bearer ${token}` }
        //     })
        //         .then((response) => {
        //             if (response.data.status === 'ok') {
        //                 commit('setAllproducts', response.data.data.data);
        //             } else if (response.data.status === 'error') {
        //                 alert(response.data.message);
        //             } else {
        //                 console.error('Unexpected response status:', response.data.status);
        //                 alert('Unexpected response from the server! Please try again later.');
        //             }
        //         })
        //         .catch(error => {
        //             console.error('Error:', error);
        //             alert('Something went wrong! Please try again');
        //         });
        // },

        fetchCategories({ commit }) {
            axiosInstance.get('categories')
                .then((response) => {
                    // if (response.status === 'ok') {
                    commit('setCategories', response.data.data)
                    // } else if (response.data.status === 'error') {
                    //     alert(response.data.message);
                    // } else {
                    //     alert('Something went wrong! Please try again');
                    // }

                })
                .catch((error) => {
                    console.error('fetchCategories:', error);
                })
        },
        fetchShowCategory({ commit, dispatch }, { categoryId, page }) {
            axiosInstance.get('categories/' + categoryId + '?page=' + page)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setShowCategory', response.data.data.data)
                        dispatch('fetchShowCategoryFilter', { categoryId, page })
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again showCategory');
                });
        },
        fetchShowCategoryFilter({ commit }, { categoryId, page }) {
            axiosInstance.get('categories/' + categoryId + '?page=' + page)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setShowCategoryFilter', response.data.data.extraData)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again showCategoryFilter');
                });
        },
        applyFilters({ commit }, data) {
            axiosInstance.get('categories/' + data.categoryId + '?page=' + data.page + '&options=' + data.colors + '&ranges=' + data.sizes + '&attributes=' + data.attributes)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setFilteredCategory', response.data.data.data)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again showCategoryFilter');
                });
        },
        applyCollectionFilters({ commit }, data) {
            axiosInstance.get('collections/' + data.collectionId + '?page=' + data.page + '&options=' + data.colors + '&ranges=' + data.sizes + '&attributes=' + data.attributes)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setFilteredCollection', response.data.data.data)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again showCategoryFilter');
                });
        },
        applyCollectionSort({ commit }, { data, orderBy, direction }) {
            const queryParams = new URLSearchParams({
                page: data.page,
                order_by: orderBy,
                direction: direction
            });

            axiosInstance.get(`collections/${data.collectionId}?${queryParams}`)
                .then((response) => {
                    const responseData = response.data;
                    if (responseData.status === 'ok') {
                        commit('setFilteredCollection', responseData.data);
                    } else if (responseData.status === 'error') {
                        // Handle error response
                        console.error('Error:', responseData.message);
                        // Show error message in UI or log to console
                    } else {
                        console.error('Unexpected response status:', responseData.status);
                        // Show unexpected response message in UI or log to console
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Handle network request errors
                    // Show error message in UI or log to console
                });
        },

        clearShowCategory({ commit }) {
            commit('setShowCategory', []);
        },
        toggleReview({ commit }, review) {
            commit("toggleReview", review);
        },
        fetchSearchProducts({ commit, dispatch }, data) {
            axiosInstance.get(`product/search?search=${data.search}&page=${data.page}`)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('searchProducts', response.data.data.data)
                        dispatch('fetchSearchProductsFilter', data)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message)
                    } else {
                        alert('Something went wrong! Please try again')
                    }
                })
        },
        fetchSearchProductsFilter({ commit }, data) {
            axiosInstance.get(`product/search?search=${data.search}&page=${data.page}`)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setSearchFilters', response.data.data.extraData)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again showCategoryFilter');
                });
        },
        applySearchFilters({ commit }, data) {
            axiosInstance.get('product/search?search=' + data.search + '&page=' + data.page + '&options=' + data.colors + '&ranges=' + data.sizes + '&attributes=' + data.attributes)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        commit('setFilteredSearch', response.data.data.data)
                    } else if (response.data.status === 'error') {
                        alert(response.data.message);
                    } else {
                        console.error('Unexpected response status:', response.data.status);
                        alert('Unexpected response from the server! Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong! Please try again showCategoryFilter');
                });
        },
        applySearchSort({ commit }, { data, orderBy, direction }) {
            const queryParams = new URLSearchParams({
                search: data.search,
                page: data.page,
                order_by: orderBy,
                direction: direction
            });

            axiosInstance.get(`product/search?${queryParams}`)
                .then((response) => {
                    const responseData = response.data;
                    if (responseData.status === 'ok') {
                        commit('setFilteredCollection', responseData.data);
                    } else if (responseData.status === 'error') {
                        // Handle error response
                        console.error('Error:', responseData.message);
                        // Show error message in UI or log to console
                    } else {
                        console.error('Unexpected response status:', responseData.status);
                        // Show unexpected response message in UI or log to console
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Handle network request errors
                    // Show error message in UI or log to console
                });
        },
    }
}