import './edit-product.scss';

import React from 'react';
import { Form } from 'react-bootstrap';

export interface ProductProps {}

export interface ProductState {}

class EditProduct extends React.Component<ProductProps, ProductState> {
	state = { product: [] };
	onSubmit = () => {};
	render() {
		return (
			<div className="product-form">
				<Form>
					<Form.Group controlId="formGroupTitle">
						<Form.Label>Book Title</Form.Label>
						<Form.Control type="text" placeholder="Enter Book Title" />
					</Form.Group>
					<Form.Group controlId="formGroupDescription">
						<Form.Label>Description</Form.Label>
						<Form.Control type="text" placeholder="Enter Description" />
					</Form.Group>
					<Form.Group controlId="formGroupPrice">
						<Form.Label>Price</Form.Label>
						<Form.Control type="number" placeholder="Enter Price" />
					</Form.Group>
					<Form.Group controlId="formGroupStock">
						<Form.Label>Quantity Available</Form.Label>
						<Form.Control type="number" placeholder="Enter Quantity Available" />
					</Form.Group>
					<Form.Group controlId="formGroupImageUrl">
						<Form.Label>Image Url</Form.Label>
						<Form.Control type="text" placeholder="Enter Image Url" />
					</Form.Group>
				</Form>
				<div />
			</div>
		);
	}
}

export default EditProduct;
