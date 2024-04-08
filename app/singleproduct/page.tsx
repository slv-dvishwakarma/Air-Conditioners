import { ParentContainer } from '@/components/ParentContainer'
import React from 'react'
import { Single } from './Single'
import { BreadCrumbs } from '../ac/BreadCrumb'
import { Tab } from './Tab'

const page = () => {
    return (
        <ParentContainer>
             <BreadCrumbs />
            <Single />
            <Tab />
        </ParentContainer>
    )
}

export default page