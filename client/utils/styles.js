import styled from 'styled-components';

const TEXT_COLOR = 'rgba(255, 255, 255, 0.6)';
const BACKGROUND_COLOR = 'rgba(43,63,83,.92)';
const BACKGROUND_COLOR_HOVER = 'rgba(63,63,63,.92)';
const BACKGROUND_COLOR_COLLECTION = 'rgba(43,63,83,.92)';

export const CollectionListerWrapper = styled.div`
  font-family: Liberation Mono, Courier, Lucidatypewriter, Fixed, monospace !important;
  z-index: 100000;
  position: fixed;
  bottom: 0px;
  background-color: ${BACKGROUND_COLOR};
  left: 0px;
  min-width: 350px;
  max-width: 350px;
  border-top: 1px solid grey;
  border-right: 1px solid grey;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 100%;
  user-select: none;
`;

export const ActionZone = styled.div`
  z-index: 100000;
  position: fixed;
  ${({ bottom }) => (bottom ? 'bottom' : 'top')}: 15px;
  left: 15px;
  display: flex;
  justify-content: space-around;
  user-select: none;
`;

export const IconWrapper = styled.div`
  height: 70px;
  width: 70px;
  background-color: ${BACKGROUND_COLOR};
  border-radius: 50%;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  svg {
    stroke: #fff;
    opacity: 0.5;
    height: 60%;
    width: 60%;
  }
`;

export const ListerHeader = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${TEXT_COLOR};
  padding: 8px;
  border-bottom: 1px solid grey;
  background-color: rgba(100, 100, 100, 0.9);
  display: flex;
  justify-content: space-between;
  user-select: none;
`;
export const CollectionHeader = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${TEXT_COLOR};
  padding: 8px;
  border-top: 1px solid grey;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  user-select: none;
  background-color: ${({ selected }) => (selected ? 'black' : BACKGROUND_COLOR_COLLECTION)};
  &:hover {
    background-color: ${({ selected }) => (selected ? 'black' : BACKGROUND_COLOR_COLLECTION)};
  }
`;

export const DocumentWrapper = styled.div`
  background-color: black;
  padding: 4px;
  padding-top: ${({ tools }) => (tools ? 8 : 0)}px;
  padding-bottom: 8px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none !important;
    user-select: none;
  }
  .content {
    border-radius: 8px;
    background-color: ${BACKGROUND_COLOR_COLLECTION};
    padding: 4px;
    padding-top: 0px;
    overflow: hidden;
    font-size: 14px;
    user-select: none;
    pre {
      color: grey;
    }
    .object-key {
      color: salmon !important;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  user-select: none;
  div {
    padding: 4px;
    color: grey;
    text-align: center;
    display: flex;
    width: 25%;
    justify-content: center;
    border-right: 1px solid grey;
    user-select: none;
    cursor: pointer;
    &:last-child {
      border-right: none;
    }
    &:hover {
      background-color: ${BACKGROUND_COLOR_HOVER};
      svg {
      }
    }
    svg {
      stroke: grey;
    }
  }
`;