import React, {Suspense} from 'react';
import Layout from 'components/layout';
import { Base } from 'templates/base';
import Link from 'next/link';
import Message from "components/Error";
import Loading from "components/Loading";
import FormLogin from "@/ui/base/form-login";
import useLogin from "hooks/useLogin";
import { Skeleton} from 'components/Skeleton';

export default function Login () {
  const { error, loading, redirect, activeLogin, google } = useLogin(); 
  return (
    <Layout title="Login">
    <Base>
      <div className="">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <Suspense fallback={<Skeleton/>}>
        <FormLogin activeLogin={activeLogin} google={google}></FormLogin>
        </Suspense>
          <p>
          <Link href={`/register?redirect=${redirect || '/'}`}>Criar Conta</Link>
          </p>
      </div>
    </Base>
    </Layout>
  );
};
