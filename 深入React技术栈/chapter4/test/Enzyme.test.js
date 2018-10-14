import React from 'react';
import { expect } from 'chai';
import List from '../app/components/List';
import ListItem from '../app/components/ListItem';
import ItemShowLayer from '../app/components/ItemShowLayer';
import CreateBar from '../app/components/CreateBar';
import Deskmark from '../app/components/Deskmark';

import { shallow, mount } from 'enzyme';


describe('Tesing all the SFC using Enzyme', () => {
    const testData = [
        {
            "id": "b168c5e4-89d1-459c-ac5c-063925372cc4",
            "title": "Hello",
            "content": "# testing markdown",
            "time": 1539486933792
        }, {
            "id": "ce60cca7-7049-4b4e-bfed-d9cfd2652fb7",
            "title": "Hello2",
            "content": "# Hello world",
            "time": 1539486943172
        }
    ];

    it('Test List component using Enzyme', () => {
        let list = shallow(<List items={testData} />);
        expect(list.find(ListItem).length).to.equal(testData.length);
    })

    it('Test ListItem component using Enzyme', () => {
        let listItem = shallow(<ListItem item={testData[0]} />);
        expect(listItem.find('.item-title').text()).to.equal(testData[0].title);
        expect(listItem.hasClass('list-group-item')).to.be.true;
    })

    it('Test ItemShowLayer with no data using Enzyme', () => {
        let itemShowLayer = shallow(<ItemShowLayer item={null} />);
        expect(itemShowLayer.find('.no-select').length).to.equal(1);
        expect(itemShowLayer.hasClass('item-show-layer-component'));
    })

    it('Test ItemShowLayer with  data using Enzyme', () => {
        let itemShowLayer = shallow(<ItemShowLayer item={testData[0]} />);
        expect(itemShowLayer.find('h2').text()).to.equal(testData[0].title);
        expect(itemShowLayer.hasClass('item-show-layer-component'));
    })

    it('Test Deskmark create one post and delete a post',()=>{
        let deskmark = mount(<Deskmark/>);
        //点击创建
        deskmark.find('.create-bar-component').simulate('click');
        expect(deskmark.find('.item-editor-component').length).to.equal(1);
        expect(deskmark.find('.item-show-layer-component').length).to.equal(0);
        expect(deskmark.find('.item-component').length).to.equal(0);
        //输入数据
        let input = deskmark.find('input');
        input.node.value = 'new title';
        input.simulate('change',input);

        let textarea = deskmark.find('textarea');
        textarea.node.value = "#looks good";
        textarea.simulate('change',textarea);

        //点击保存
        deskmark.find('.btn-success').simulate('click');
        expect(deskmark.find('.item-editor-component').length).to.equal(0);
        expect(deskmark.find('.item-show-layer-component').length).to.equal(1);
        expect(deskmark.find('.item-component').length).to.equal(1);
        expect(deskmark.find('.item-component').first().find('.item-title').text()).to.equal('new title');
        deskmark.find('.item-component').first().simulate('click');
        expect(deskmark.find('.item-show-layer-component h2').text()).to.equal('new title');
        //删除
        deskmark.find('.btn-danger').simulate('click');
        expect(deskmark.find('.item-component').length).to.equal(0);
    })

})



