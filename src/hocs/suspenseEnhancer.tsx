import React, { Suspense } from 'react';

export default function suspenseEnhancer<OriginProps>(C: React.ComponentType<OriginProps>) {
	return (props: OriginProps) => (
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
