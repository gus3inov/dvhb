import React, { Suspense } from 'react';

export default function suspenseEnhancer<OriginProps>(C: React.ComponentType<OriginProps & any>) {
	return (props: any) => (
		<Suspense
			fallback={(
				<span>loading ...</span>
			)}
		>
			<C
				{...props}
			/>
		</Suspense>
	);
}
