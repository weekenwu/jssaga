import styled  from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    width:100%;
    overflow:hidden;
`;

export const Logo = styled.div`
    width:100px;
    height:58px;
    float:left;
    box-sizing:border-box;
    background:url(${logoPic});
    background-size: contain;
`;

export const NavWrapper = styled.div`
    width:945px;
    height:58px;
    float:left;
    margin-left:10%;
    box-sizing:border-box;
`;

export const NavItem = styled.div`
    height:56px;
    line-height:56px;
    padding-left:15px;
    padding-right:15px;
    color:#333；
    &.left{
        float:left;
    };
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    height:58px;
    float:left;
    margin-left:60px;
    box-sizing:border-box;
    position:relative;
    .zoom {
		position: absolute;
		right: 5px;
		top:14px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		font-size:24px;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
    
`;
export const SearchInput = styled.input.attrs({
    placeholder: '搜索'
})`
    width:240px;
    height:38px;
    float:left;
    line-height:38px;
    font-size:14px;
    padding-left:15px;
    padding-right:35px;
    margin-top:10px;
    box-sizing:border-box;
    border:1px solid #eee;
    border-radius:40px;
    background:#eee;
    outline: none;
    &::placeholder {
		color: #999;
	}
	&.slider-enter{
	    transition: all .2s ease-out;
	}
	
	&.slider-enter-active{
	    width:260px;
	}
	
	&.slider-enter-done{
	    width:260px;
	}
	
	&.slider-exit{
	    transition: all .2s ease-out;
	}
	
	&.slider-exit-active{
	    width:240px;
	}
	
	&.slider-exit-done{
	    width:240px;
	}
`;
export const BtnWrapper = styled.div`
    height:58px;
    float:left;
    margin-left:45px;
    box-sizing:border-box;
`;

export  const Button = styled.div`
    float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-siz: 14px;
	cursor:pointer;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`;