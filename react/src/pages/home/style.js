import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center; 
  width: 100%;
  background-color: #f6f6f6;
`
export const HomeWrap = styled.div`
  margin-top: .5rem;
  box-sizing:border-box;
  padding: 0 1rem;
  width: 64.5rem;
  background-color: #f6f6f6;
`
export const MainColumn = styled.div`
  float: left;
  box-shadow: 1px 1px 1px #eee,1px -1px 1px #eee,-1px 1px 1px #eee,-1px -1px 1px #eee;
  width: 43.375rem;
  background-color: #fff;
`;
export const LeftColumn = styled.div`
  float: right;
  width: 18.5rem;
  height: 100%;
  background-color: #f6f6f6;
`;
/************************************Tab **************************************************/
export const TabWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 3.7rem;
  background-color: #fff;
  border-bottom: 1px solid #eee;
`
export const TabItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 2rem;
  height: 3.7rem;
  margin: 0 1.375rem;
  cursor: pointer;
  .tab-link{
    text-decoration: none;
    color: #8590a6
  }
  .tab-link:hover{
    color: #455066;
  }
  &.reco .tab-link, &.atten .tab-link, &.heat .tab-link{
    color: #0084ff;
  }
  
`
/****************************************Topic****************************************** */
/*******************111******************** */
export const TopicWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 1.25rem;
  border-bottom: 1px solid #eee;
`;
export const TopicTitle = styled.span`
  margin-right: 1rem;

`
export const TopicDesc = styled.span`
  color: #999;
  font-size: .9375rem;
`
export const TopicBtn = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 1.3rem;
  color: #8590a6;
  border: 1px solid #8590a6;
  border-radius: 15%;
  text-align: center;
  line-height: 1.3rem;
  &:hover{
    color: #252046;
  }
`
export const TopicContent = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
`
export const TopicItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.25rem;
  height: 1.875rem;
  background-color: #f6f6f6;
  color: #646464;
  border-radius: 8%;
  margin: 0 .5rem;
  cursor: pointer;
  &.cancel{
    height: 2rem;
    width: 5rem;
    border: 1px solid #646464;
    background-color: #fff;
  }
  &.sure{
    height: 2rem;
    width: 5rem;
    border: 1px solid #646464;
    background-color: #0084ff;
    color: #fff;
  }
`
export const TopicBottom = styled.div`
  display: flex;
  justify-content: flex-end;
`
/*******************222******************** */
export const SelectWrap = styled(TabWrap)`
  position: relative;
  align-items: center;
  justify-content: flex-start;
`
/*******************************HomeList************************************************ */
export const ListWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid #eee;
`
export const ListItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem 1rem 1rem 0;
  display: flex;
  border-bottom: 1px solid #eee;
`
export const ListRank = styled.div`
  text-align: center;
  width: 3.5625rem;
  height: 6.5625rem;
  color: #ff9607;
  font-size: 1.125rem;
  font-weight: 600;
`
export const ListPic = styled.div`
  width: 11.875rem;
  height: 6.5625rem;
  border-radius: 5%;
  border: 1px solid #eee;
  background: url(${props => props.imgUrl});
  background-size:cover;
`;
export const ListContent = styled.div`
  width: 25.9375rem;
  height: 6.5625rem;
  a{
    text-decoration: none;
  }
`
export const ListTitle = styled.h2`
  width: 100%;
  line-height: 1.75rem;
  font-size:1.125rem;
  font-weight: 600;
  color: #1a1a1a;
`
export const ListDesc = styled.p`
  overflow: hidden;
  margin: .25rem 0;
  width: 100%;
  height: 1.5rem;
  font-size: .9375rem;
  line-height: 1.3rem;
  color: #444;
`
export const ListBottom = styled.div`
  width: 100%;
  color: #8590a6;
  i{
    margin-right: 2rem;
    font-size: 1rem;
  }
  .icon-feiji{
    font-size: 1.2rem;
  }
  i span{
    font-size: .875rem;
  }
`
/***************************************WriteWrap***************************************** */
export const WriteWrap = styled.div`
  width: 100%;
  height: 12.125rem;
  background-color: #fff;
  box-shadow: 1px 1px 1px #eee,1px -1px 1px #eee,-1px 1px 1px #eee,-1px -1px 1px #eee;
`
export const WriteItem = styled.div`
  float:left;
  background-color: #fff;
  width: 3rem;
  height: 3.1875rem;
  margin: 1.4375rem;
  color: #8590a6;
  cursor: pointer;
  p{
    width: 1rem;
    height: 1rem;
    font-size: 1.2rem;
    margin: .5rem auto;
  }
  &:hover{
    color: #556076;
  }
`
export const WriteItemDsec = styled.div`
  font-size: 1rem;
  color: #444;
  &:hover{
    color: #00249f;
  }
`
export const WriteItem2 = styled.div`
  float: left;
  width: 14.5rem;
  height: 2.5rem;
  margin: 0 0 0 1.75rem;
  color: #8590a6;
  line-height : 2.5rem;
  cursor:pointer;
  &.first{
    border-bottom : 1px solid #eee;
  }
  i{
    font-size: 1.3rem;
  }
  span{
    margin: 1rem .5rem;
    font-size: .875rem;
    &:hover{
      color: #556076;
    }
  }
`
/*****************************************Community******************************************** */
export const CommunityWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-shadow: 1px 1px 1px #eee,1px -1px 1px #eee,-1px 1px 1px #eee,-1px -1px 1px #eee;
  margin-top: .6rem;
  background-color: #fff;
  width: 18.5rem;
  height: 10.9375rem;
  box-sizing: border-box;
  padding: .625rem;
`
export const CommunityItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 5.6875rem;
  height: 3.4375rem;
  cursor: pointer;
  .iconfont{
    font-size: 1.5rem;
    margin: 0 auto;
  }
  p{
    color: #8590a6;
    font-size: .9375rem;
    margin: .15rem auto;
  }
  .icon-shandian, .shandian:hover{
    color: rgb(255, 207, 0);
  }
  .icon-shu2, .shu2:hover{
    color: rgb(67, 212, 128);
  }
  .icon-yuanzhuo, .yuanzhuo:hover{
    color: rgb(0, 132, 255);
  }
  .icon-zhuanlan, .zhuanlan:hover{
    color: rgb(15, 136, 235);
  }
  .icon-fufei, .fufei:hover{
    color: rgb(84, 120, 240);
  }
`;
/***************************************AD广告************************************************** */
export const ADWrap = styled.div`
  background-color: #fff;
  position:sticky;
  top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 1px 1px 1px #eee,1px -1px 1px #eee,-1px 1px 1px #eee,-1px -1px 1px #eee;
  margin-top: .6rem;
  width: 100%;
  height: 15.375rem;
  cursor: pointer;
  background-size: contain;
  background: url(https://pic2.zhimg.com/v2-e504f96847cd6379fa8c28e18ec14421_540x450.jpeg);
`
export const ADButton1 = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: .375rem;
  right: .375rem;
  width: 1.4rem;
  height: 1.4rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  color: #aaa;
  &:hover{
    color: #fff;
  }
`
export const ADButton2 = styled.div`
  position: absolute;
  bottom: .375rem;
  right: .375rem;
  border-radius: 15%;
  color: #aaa;
  padding: .3rem;
  background-color: rgba(0,0,0, 0.6);
  &:hover{
    color: #fff;
  }
`
/**************************************HomeCard************************************************ */
export const CardWrap = styled.div`
  position: sticky;
  top: 16.5rem;
  box-sizing: border-box;
  width: 100%;
  height: 16rem;
  margin-top: .6rem;
  padding: 0.5rem 0;
  box-shadow: 1px 1px 1px #eee,1px -1px 1px #eee,-1px 1px 1px #eee,-1px -1px 1px #eee;
  background-color: #fff;
`
export const CardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  height: 2.5rem;
  padding: 0 1.25rem;
  color: #8590a6;
  cursor: pointer;
  &:hover{
    background-color: #f6f6f6;
  }
  span.description{
    width: 11.875rem;
    height:1.1875rem;
    margin: 0 .625rem;
    font-size: .875rem;
  }
  span.count{
    box-sizing: border-box;
    width: auto;
    height: 1.75rem;
    padding: .375rem .625rem;
    font-size: .75rem;
    background-color: #f6f6f6;
    color: #8590a6;
  }
  i{
    vertical-align: middle;
  }
`