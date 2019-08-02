import {add} from '@/utils/utils'

describe('utils.js', () => {
    it('should add correct', () => {
        expect(add(3,4))
            .to.equal(7);
        
    })
})
