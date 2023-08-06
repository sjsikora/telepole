import React from 'react';

type HeadProps = {
    title : string;
    description? : string;
};

const Head:React.FC<HeadProps> = (props: HeadProps) => {
    
    return <head>
        <meta charSet='utf-8' />
        <title> {props.title} </title>
        <link rel="icon" href="assets/favicon.ico" />

        {props.description ? <meta name="description"
            content={props.description} /> : null}

        <meta name="description"
            content="Telepole is a community driven platform for sharing posters and stickers."
        />
    </head>
}
export default Head;