import React from 'react'
// import { FormattedMessage } from 'react-intl'
// import { useCssHandles } from 'vtex.css-handles'
import { useQuery } from 'react-apollo'
import getUserSession from './queries/user/getUserSession.gql'
import '../styles/css/header.global.css'

interface HeaderProps {
	title: string,
	logo: string,
	userSessionIcon: string
}

const Header: StorefrontFunctionComponent<HeaderProps> = ({logo, title, userSessionIcon}) => {
	
	return (
		<header className="jussilabs-component-header">
		
			<img className="jussilabs-component-header-logo" alt="logo" src={logo}/>
		
			<h1 className="jussilabs-component-header-title">{title}</h1>
       	
		   	<UserSession icon={userSessionIcon}/>  
      	</header> 
    )
}

Header.schema = {
    title: 'editor.title.component.header',
    description: 'editor.description.component.header',
    type: 'object',
    properties: {
      	title: {
            title: 'editor.component.header.title',
            description: 'editor.component.header.description',
            type: 'string',
            default: "Help Desk",  
		},
		logo: {
			title: 'editor.component.header.logo-title',
			description: 'editor.component.header.logo-description',
			type: 'string',
			default: 'https://storecomponents.vteximg.com.br/arquivos/store-theme-logo-mobile.png',
			widget: {
			'ui:widget': 'image-uploader',
			},
		},
		userSessionIcon: {
			title: 'editor.component.header.user-session-icon-title',
			description: 'editor.component.header.user-session-icon-description',
			type: 'string',
			default: 'https://storecomponents.vteximg.com.br/arquivos/store-theme-logo-mobile.png',
			widget: {
			'ui:widget': 'image-uploader',
			},
		},
    }
}

interface UserSessionProps {
	icon: string
}

const UserSession: StorefrontFunctionComponent<UserSessionProps> = ({icon}) => {
    const { data, loading } = useQuery(getUserSession, {
		ssr: false
	})

	let adminUserEmail = "carregando...";
	
	if(!loading){
		adminUserEmail = data.getSession.adminUserEmail;
	}

    return(		 
		<div className="jussilabs-component-usersession-block">
			<img className="jussilabs-component-usersession-icon" alt="usersession-icon" src={icon}/>
			<p className="jussilabs-component-usersession-email">{adminUserEmail}</p>
		</div> 
    )
}
    
export default Header