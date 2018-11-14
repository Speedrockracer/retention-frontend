import { shallowMount } from '@vue/test-utils'
import GraphChart from '../GraphChart'

describe('GraphChart', () => {

    // Simple smoke test
    it("Does not explode", () => {
        const wrapper = shallowMount(GraphChart)
        expect(wrapper.element).toMatchSnapshot()
    })
})
