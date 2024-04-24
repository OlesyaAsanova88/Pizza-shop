import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';
import { JSX } from 'react/jsx-runtime';

const Sceleton = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
	<ContentLoader
		speed={2}
		width={280}
		height={465}
		viewBox="0 0 280 465"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<circle cx="33" cy="78" r="2" />
		<circle cx="120" cy="114" r="98" />
		<rect x="23" y="239" rx="7" ry="7" width="202" height="13" />
		<rect x="28" y="277" rx="0" ry="0" width="4" height="3" />
		<rect x="25" y="275" rx="0" ry="0" width="197" height="46" />
		<rect x="27" y="344" rx="0" ry="0" width="88" height="12" />
		<rect x="140" y="349" rx="0" ry="0" width="65" height="0" />
		<rect x="135" y="340" rx="0" ry="0" width="86" height="20" />
	</ContentLoader>
);

export default Sceleton;
