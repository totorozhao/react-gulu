 import renderer from 'react-test-renderer'
 import React from 'react'
 import Icon from '../icon'
 import {mount} from 'enzyme'

 describe('icon',()=>{
    it('render successfully',()=>{
        const json = renderer.create(<Icon name="strawberry"/>).toJSON()
        expect(json).toMatchSnapshot()
    })


    // it('click',()=>{
    //     let n = 1
    //     const fn = ()=>{
    //         n=2
    //     }
    //     const component = mount(<Icon name="falling" onClick={fn}/>)
    //     component.find('svg').simulate('click')
    //     expect(n).toEqual(2)
    // })

    // 比较好的写法
    it('click',()=>{
        const fn = jest.fn()
        const component = mount(<Icon name="falling" onClick={fn}/>)
        component.find('svg').simulate('click')
        expect(fn).toBeCalled()
    })
 })