import React, {useState} from "react";
import './buttonWrapper.css';
import Button from "./button";
import Answer from "./answer";

export default function ButtonWrapper()
{
    var [ans, setAns]=useState("");
    const handleClick=(event)=>{
        var value=event.target.value;
        if(value=="=")
        {
            if(ans!=="0")
            {
                try{
                    setAns(eval(ans));
                }catch(err)
                {
                    setAns("ERROR");
                }
            }
            
        }
        else if(value=="C")
        {
            setAns("");
        }
        else if(value=="D")
        {
            try{
                setAns(ans.substring(0, ans.length-1));
            }catch(err)
            {
                setAns(ans);
            }
        }
        else
        {
            setAns(ans+=value);
        }
    }
    return(
        <div className="buttonWrapper">
            <Answer value={ans}/>
            <Button val="C" handleClick={handleClick} cl="button" cl1="Op"/>
            <Button val="D" handleClick={handleClick} cl="button" cl1="Op"/>
            <Button val="**" handleClick={handleClick} cl="button" cl1="Op"/>
            <Button val="/" handleClick={handleClick} cl="button" cl1="Op"/>
            <Button val="7" handleClick={handleClick} cl="button" cl1="btn"/>
            <Button val="8" handleClick={handleClick} cl="button" cl1="btn"/>
            <Button val="9" handleClick={handleClick} cl="button" cl1="btn"/>
            <Button val="*" handleClick={handleClick} cl="button" cl1="Op"/>
            <Button val="4" handleClick={handleClick} cl="button" cl1="btn"/>
            <Button val="5" handleClick={handleClick} cl="button" cl1="btn"/>
            <Button val="6"handleClick={handleClick} cl="button" cl1="btn"/>
            <Button val="-"handleClick={handleClick} cl="button" cl1="Op"/>
            <Button val="1" handleClick={handleClick} cl="button" cl1="btn"/>
            <Button val="2"handleClick={handleClick} cl="button" cl1="btn"/>
            <Button val="3"handleClick={handleClick} cl="button" cl1="btn"/>
            <Button val="+"handleClick={handleClick} cl="button" cl1="Op"/>
            <Button val="0"handleClick={handleClick} cl="Zero" cl1="Zer"/>
            <Button val="." handleClick={handleClick} cl="button" cl1="Op"/>               
            <Button val="=" handleClick={handleClick} cl="button" cl1="Op"/>     
        </div>
    )
}