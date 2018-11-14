import { shallowMount } from '@vue/test-utils'
import GraphBlocksRow from '../GraphBlocksRow'

describe('GraphBlocksRow', () => {

    // Simple smoke test
    it("Does not explode", () => {
        const wrapper = shallowMount(GraphBlocksRow)
        expect(wrapper.element).toMatchSnapshot()
    })
})
