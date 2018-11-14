import { shallowMount } from '@vue/test-utils'
import GraphBlocks from '../GraphBlocks'

describe('GraphBlocks', () => {

    // Simple smoke test
    it("Does not explode", () => {
        const wrapper = shallowMount(GraphBlocks)
        expect(wrapper.element).toMatchSnapshot()
    })
})
