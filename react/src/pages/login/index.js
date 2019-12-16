import React, {useState} from 'react';
import {
  LoginPageWrap,
  LogoPic,
  FormWrap,
  Form,
  HeadInfo,
  HeadInfoItem,
  ItemRow,
  SelectWrap,
  Select,
  Input,
  Button,
  LoginBtn,
  BottomWrap
} from "./style";

function LoginPage(){
  const [loginMethod, setLoginMethod] = useState('phone');
  return (
    <LoginPageWrap>
      <LogoPic />
      <FormWrap classNeme={loginMethod==='password' ? 'password' : ''}>
        <Form>

          <HeadInfo>
            <HeadInfoItem
              className={loginMethod === "phone" ? "phone" : ""}
              onClick={() => {
                setLoginMethod("phone");
              }}
            >
              注册并登陆
            </HeadInfoItem>
            <HeadInfoItem
              className={loginMethod === "password" ? "password" : ""}
              onClick={() => {
                setLoginMethod("password");
              }}
            >
              密码登陆
            </HeadInfoItem>
          </HeadInfo>


          { loginMethod === 'phone' ?
          <> 
            <ItemRow>
              <SelectWrap>
                <Select>
                  <option>美国+1</option>
                  <option>中国+86</option>
                  <option>日本+12</option>
                  <option>法国+89</option>
                </Select>
              </SelectWrap>
              <Input placeholder="手机号" />
            </ItemRow> 
            <ItemRow><Input placeholder="密码"/></ItemRow>
            <ItemRow><Input placeholder="确认密码"/></ItemRow>
            </>:
            <ItemRow><Input placeholder="手机号"/></ItemRow>
          }
          {
            loginMethod === 'phone' ?
              <ItemRow>
                <Input className="yanzheng" placeholder="输入六位短信验证码" />
                <Button>获取验证码</Button>
              </ItemRow>:
            <ItemRow><Input placeholder="密码"/></ItemRow>
          }
          {
            loginMethod === 'phone' ? 
            <LoginBtn>注册&登陆</LoginBtn>
            :
            <LoginBtn>登陆</LoginBtn>
          }
          
          
        </Form>
      </FormWrap>
      <BottomWrap>
        <span className="desc">社交账号登陆</span>
        <i className="iconfont icon-weixin">
          <span>微信</span>
        </i>
        <i className="iconfont icon-QQ">
          <span>QQ</span>
        </i>
        <i className="iconfont icon-unie61d">
          <span>微博</span>
        </i>
      </BottomWrap>
    </LoginPageWrap>
  );
}

export default LoginPage;