import styled from "styled-components";

export const LoginPageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #eee;
  height: 39.0625rem;
  box-shadow: 1px 1px 1px #eee,1px -1px 1px #eee,-1px 1px 1px #eee,-1px -1px 1px #eee;
`;
export const LogoPic = styled.div`
  width: 8rem;
  height: 5.065rem;
  background: url(https://pic4.zhimg.com/80/v2-a47051e92cf74930bedd7469978e6c08_hd.png);
  background-size: cover;
  margin: 2rem 0 1.5rem;
`;
export const FormWrap = styled.div`
  width: 25rem;
  /* height: 24rem; */
  background-color: #fff;
  margin-bottom: 2rem;
  /* &.password{
    height: 20rem;
  } */
`;
export const Form = styled.form`
  padding: 0 1.5rem ;
  height: auto;
`;
export const HeadInfo = styled.div`
  width: 22rem;
  height: 3.75rem;
  margin-bottom: 2rem;
`;
export const HeadInfoItem = styled.div`
  display: inline-block;
  height: 3.75rem;
  line-height: 3.75rem;
  margin-right: 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  position: relative;
  &.phone::after{
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 100%;
    height: .1875rem;
    background-color: #0084ff;
  }
  &.password::after{
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 100%;
    height: .1875rem;
    background-color: #0084ff;
  }
`;
export const ItemRow = styled.div`
  width: 22rem;
  height: 3.0625rem;
  line-height: 3.0625rem;
  font-size: .875rem;
  border-bottom: 1px solid #eee;
`;
export const SelectWrap = styled.div`
  display: inline-block;
  width: 5.75rem;
  height: 1.625rem;
`
export const Select = styled.select`
  appearance:none;
  color: #8590a6;
  border: 1px solid transparent;
  cursor: pointer;
`
export const Input = styled.input`
  background: none;
	outline: none;
	border: none;
  display: inline-block;
  width: 14.625rem;
  height: 3rem;
  &.yanzheng{
    padding: 0;
  }
`
export const Button = styled.button`
  border: 0;
  background-color: transparent;
  outline: none;
  width: 7.3rem;
  height: 3rem;
  color: #175199;
  cursor: pointer;
`
export const LoginBtn = styled.button`
  border: 0;
  background-color: transparent;
  outline: none;
  background: #0084ff;
  width: 100%;
  height: 2.25rem;
  color: #fff;
  margin: 1.5rem 0rem 1rem;
  cursor: pointer;
`
export const BottomWrap = styled.div`
  box-shadow: 1px 1px 1px #eee,1px -1px 1px #eee,-1px 1px 1px #eee,-1px -1px 1px #eee;
  background-color: #fff;
  width: 25rem;
  height: 3.75rem;
  line-height: 3.75rem;
  font-size: .9375rem;
  span.desc{
    float: left;
    margin-right: 2rem;
    width: 9rem;
    text-align: center;
    color: #8590a6;
  }
  .iconfont{
    display: inline-block;
    width: 3.375rem;
    height: 3.75rem;
    margin-left: 1rem;
    font-size: 1.125rem;
    cursor: pointer;
    span{
      color: #8590a6;
      font-size: .9375rem;
      /* margin-left: 0.5rem; */
    }
  }
  .icon-weixin{
    color: #35ef59;
  }
  .icon-QQ{
    color: #37d3e8;
  }
  .icon-unie61d{
    color: #ea5d2c;
  }
`

