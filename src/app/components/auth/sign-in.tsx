'use client'

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "@/amplifyconfiguration.json"

Amplify.configure(config, {ssr: true});

export function SignIn() {
    return <Authenticator.Provider><div className="container-auth"><Authenticator/></div></Authenticator.Provider>;    
}