import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   max-width: 500px;
   margin: 0 auto;

   button{
        color: #fff;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 14px;
        cursor: pointer;
   }
`;

export const Form = styled.form`
    display: flex;
    margin-bottom: 20px;

    input {
        flex: 1;
        margin-right: 10px;
        padding: 10px;
        border: none;
        border-radius: 5px;
        font-size: 12px;
    }

    button {
        background-color: #00C591;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    thead{
        background: #D8D5D8;
        
    }

    th, td{
        text-align: left;
        padding: 10px;
    }

    td{
        color: #fff;
    }

    button{
        background-color: #FB7779;
    }

    a{
        color : #fff;
        text-decoration: none
    }

    .done{
        text-decoration: line-through;
    }
`;