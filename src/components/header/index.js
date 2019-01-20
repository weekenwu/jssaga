import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {HeaderWrapper,
        Logo,
        NavWrapper,
        BtnWrapper,
        NavItem,
        SearchWrapper,
        SearchInput,
    Button} from './style';

const Header = (props) => {
    const { focused,handleInputFocused,handleInputBlur} = props;
    return (
        <HeaderWrapper>
            <Logo></Logo>
            <NavWrapper>
                <NavItem className='left active'>
                    首页
                </NavItem>
                <NavItem className='left'>
                    下载App
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={300}
                        classNames="slider"
                    >
                        <SearchInput onFocus={handleInputFocused}
                            onBlur = {handleInputBlur}>
                        </SearchInput>
                    </CSSTransition>
                    <i className='iconfont zoom icon-icon-'></i>
                </SearchWrapper>
                <NavItem className='right'>
                    登录
                </NavItem>
                <NavItem className='right'>
                    Aa
                </NavItem>
            </NavWrapper>
            <BtnWrapper>
                <Button className='writting'>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </BtnWrapper>
        </HeaderWrapper>
    )
};

const mapToState = (state) => {
    return { focused: state.getIn(['head', 'focused'])}
};

const mapToDispatch = (dispatch) => {
    return {
        handleInputFocused(){
            dispatch({type:'HEADER_INPUT_FOCUSED'});
        },
        handleInputBlur(){
            dispatch({type:'HEADER_INPUT_BLUR'});
        }
    }
};

export default connect(mapToState,mapToDispatch)(Header);