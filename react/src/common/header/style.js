import styled from "styled-components";
export const HeaderWrap = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.25rem;
  box-shadow: 0 1px .1875rem rgba(26,26,26,.1);
  /* box-shadow: 1px 1px 1px #eee,1px -1px 1px #eee,-1px 1px 1px #eee,-1px -1px 1px #eee; */
`;
export const Logo = styled.div`
  flex: 0 1 4rem;
  height: 1.875rem;
  background: url(https://pic4.zhimg.com/80/v2-a47051e92cf74930bedd7469978e6c08_hd.png);
  background-size: cover;
  cursor: pointer;
  margin-right: 2rem;
`;

export const NavItem = styled.div`
  box-sizing: border-box;
  flex: 0 1 4rem;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 0 1rem 0 1rem;
  height: 3.125rem;
  .link{
    text-decoration:none;
    color: #8590a6;
    font-size: 0.9375rem;
    cursor : pointer;
  }
  &.homeState .link{
    color: black;
  }
  &.homeState .link::after{
    position: absolute;
    left: 1rem;
    bottom: 0;
    content: '';
    width: 1.875rem;
    height: .1875rem;
    background-color: #0084ff;
  }
  &.findState .link{
    color: black;
  }
  &.findState .link::after{
    position: absolute;
    left: 1rem;
    bottom: 0;
    content: '';
    width: 1.875rem;
    height: .1875rem;
    background-color: #0084ff;
  }
  &.replyState .link{
    color: black;
  }
  &.replyState .link::after{
    position: absolute;
    left: 1rem;
    bottom: 0;
    content: '';
    width: 3.75rem;
    height: .1875rem;
    background-color: #0084ff;
  }
  &:hover{
    color: #556076;
  }
  .iconfont{
    padding: 0;
    font-size: 1.25rem;
    margin: 0 0.5rem;
    color: #8590a6;
  }
  .iconfont:hover{
    color: #657086;
  }
  .icon-photo{
    font-size: 1.8rem;
  }
`;

export const NavItem2 = styled(NavItem)`
  flex: 0 1 5.875rem;
`;

export const SearchWraper = styled.div`
  background-color: #f6f6f6;
  flex: 0 1 15rem;
  height: 2.125rem;
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin-left: 3rem;
  .icon-fangdajing{
    font-size: 1.3rem;
    cursor: pointer;
  }
  /* &.slide-enter{
    transition: all 0.5s linear;
  }
  &.slide-enter-active{
  }
  &.slide-exit{
    transition: all 0.5s linear;
  }
  &.slide-exit-active{
  }
  &.focused {
    flex: 1 1 25rem;
  } */
`;

export const SearchInput = styled.input`
  display: inline-block;
  background-color: #f6f6f6;
  flex: 0 1 14rem;
  height: 1.5rem;
	outline: none;
	border: none;
`;

export const Button = styled.div`
  flex: 0 1 3.625rem;
  height: 2.125rem;
  color: #ffffff;
  border-radius: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0084ff;
  font-size: 0.875rem;
  margin: 0 5rem 0 1rem;
  cursor: pointer;
  &:hover{
    background-color: #0064df;
  }
`
export const SearchInfo = styled.div`
  background-color: #fff;
  position: absolute;
  z-index: 10;
  left: 33.5rem;
  top: 3.25rem;
  width: 14rem;
  padding: 1rem;
  color: #8590A6;
  border: 1px solid #eee;
`
export const SearchTitle = styled.div`
  background-color: #fff;
  margin-bottom:1.5rem;
`
export const SearchItem = styled.div`
  background-color: #fff;
  margin-top: 1rem;
  font-size: .875rem;
  cursor: pointer;
  &:hover{
    color: #556076;
  }
`


