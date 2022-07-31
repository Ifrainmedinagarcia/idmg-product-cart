import React from "react"
import renderer from "react-test-renderer";
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/product';


describe('ProductTitle', () => {
	test('should show the component with the title personalized ', () => {
		const wrapper = renderer.create(
			<ProductTitle title="Custom Product" />
		)
		expect(wrapper.toJSON()).toMatchSnapshot()
	});

	test('should show the component with its name', () => {
		const wrapper = renderer.create(
			<ProductCard product={product1}>
				{() => (
					<ProductTitle title="Custom Product" />
				)}
			</ProductCard>
		)
		expect(wrapper.toJSON()).toMatchSnapshot()
	});

});