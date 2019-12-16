import styled from 'styled-components';

export const QuesWrapper =  styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 1rem 0;
  display: flex;
  box-shadow: 0 1px .1875rem rgba(26,26,26,.1);
`
export const QuesContent = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 64.5rem;
  padding: 0 1rem;
`
export const QuesFooter = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 64.5rem;
  height: 2.375rem;
  padding: 0 1.6rem;
  margin-top: .6rem;
  position: sticky;
  bottom: 0;
`

/********************************问题主体******************************************* */
export const MainQues = styled.div`
  box-sizing: border-box;
  width: 42.87rem;
  padding-left: 1.25rem;
`
export const MainTags = styled.div`
  display: flex;
  height: 2.375rem;
  width: 100%;
`
export const Tag = styled.div`
  box-sizing: border-box;
  padding: 0 .75rem;
  margin: .1875rem .3125rem .1875rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 1.875rem;
  background-color: #e5f2ff;
  border-radius: 6.25rem;
  color: #0084ff;
  font-size: .875rem;
`
export const MainTittle = styled.h1`
  box-sizing: border-box;
  width: 100%;
  height: 2rem;
  margin: .75rem 0 .25rem;
  font-weight: 600;
  font-size: 1.375rem;
`
export const MainDesc = styled.div`
  max-height: 4rem;
  width: 100%;
  font-size: .9375rem;
  line-height: 1.6rem;
  letter-spacing: .08rem;
  color: #262626;
  &.extend{
    max-height: none;
  }
`
export const Extend = styled.span`
  color: #8590a6;
`
export const FollowWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 19.5rem;
  height: 6.9375rem;
`
export const NumItem = styled.div`
  height: 3.125rem;
  padding: 0 .8rem;
  &.follow_num{
    border-right: 1px solid #eee;
  }
  p{
    font-size: .875rem;
    color: #8590a6;
  }
  span{
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 2.25rem;
  }
`;
/************************问题footer footer footer************************************** */
export const BtnItem = styled.div`
  display: inline-block;
  width: 6rem;
  height: 2.125rem;
  line-height: 2.125rem;
  padding: 0 1rem;
  margin: 0 .2rem;
  border-radius: .1875rem;
  font-size: .875rem;
  text-align: center;
  cursor: pointer;
  &.guanzhu{
    border: 1px solid #0084ff;
    background-color: #0084ff;
    color: #fff;
  }
  &.submit{
    position: absolute;
    right: 3rem;
    bottom: 1rem;
    width: 4rem;
    border: 1px solid #0084ff;
    background-color: #0084ff;
    color: #fff;
  }
  &.huida{
    border: 1px solid #0084ff;
    color: #0084ff;
  }
  &.invite{
    border: 1px solid #8590a6;
    color: #8590a6;
  }
  .iconfont{
    font-size: .875rem;
  }
` 
export const Actoins = styled.div`
  display: inline-block;
  width: 16.7rem;
  height: 2.125rem;
  line-height: 2.125rem;
  
  .iconfont{
    color: #8590a6;
    margin-left: .6rem;
    cursor: pointer;
  }
  i span{
    cursor: pointer;
    font-size: .875rem;
  }
`
export const contentWrap  = styled.div`
  width: 64.5rem;
`
/********************************回答部分***************************************** */
export const ListItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #eee;

`
export const ListItemHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  /* background-color: #eee; */
  margin-bottom: .7rem;
  div {
    width: 2.375rem;
    height: 2.375rem;
    background: url(https://pic4.zhimg.com/v2-d9c86d0e824b209917026b11522269d4_xs.jpg);
    background-size:cover;
  }
  p{
    font-size: 1rem;
    color: #444;
    font-weight: 600;
    margin: 0 1rem;
  }
  span{
    font-size: .875rem;
    color: #8590a6;
  }
`;
export const ListItemText = styled.div`
  position: relative;
  font-size: .9375rem;
  color: #1a1a1a;
  line-height: 1.5rem;
  text-align: justify;
  max-height: 15rem;
  &.extend{
    max-height: none;
  }
`
export const ReadAll = styled.p`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  color: #175199;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, .7);
  background: linear-gradient(transparent,10% ,white);
  height: 4.5rem;
  z-index: 1;
  cursor: pointer;
`;
export const ListItemFooter = styled.div`
  position: sticky;
  bottom: 0;
  background-color: white;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 3.375rem;
`
export const FooterItem = styled.div`
  display: flex;
  margin-right: .5rem;
  align-items: center;
  box-sizing: border-box;
  padding:0 .625rem;
  font-size: .875rem;
  height: 2.125rem;
  color: #8590a6;
  &.isAgree{
    background: rgba(0, 132, 255, .1);
    color: #0084ff;
  }
  cursor: pointer;
`
export const AnswerWrapper = styled.div`
  position: relative;
  width: 43.375rem;
  background-color: #fff;
  height: 22.25rem;
  margin-bottom: .6rem;
  box-shadow: 1px 1px 1px #eee,1px -1px 1px #eee,-1px 1px 1px #eee,-1px -1px 1px #eee;
`

