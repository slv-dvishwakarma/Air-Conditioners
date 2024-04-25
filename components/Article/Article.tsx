import React from 'react'

interface ArticleItem {
    title: string;
    paragraph: string;
}

interface ArticleProps {
    article: ArticleItem[];
    paragraph?: string;
}

export const Article: React.FC<ArticleProps> = ({ article, paragraph}) => {
  return (
    <div className='article py-[50px] space-y-7'>
        {article.map((items, index) => (
            <p key={index} className='text-[18px]'>
                <strong>{items.title}</strong> {items.paragraph}
            </p>
        ))}
        {paragraph && (
            <div className='pt-[20px]'><span className='text-[18px]'>{paragraph}</span></div>
        )}
    </div>
  )
}
