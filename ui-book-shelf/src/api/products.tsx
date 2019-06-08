import axios from 'axios';

export default axios.create({
    baseURL:  'http://localhost:8080'
})

// fetchProducts() {
// 		axios
// 			.get(`http://localhost:8080/products`)
// 			.then((response: any) => {
// 				this.props.productList(response.data.products);
// 			})
// 			.catch((error: any) => {
// 				console.log(error);
// 			});
// 	}