import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ color }) => (
	<svg width="200" height="200" viewBox="0 0 200 200">
		<path
			d="M3.9297 199.417C6.10001 199.417 7.85939 197.657 7.85939 195.487C7.85939 193.317 6.10001 191.557 3.9297 191.557C1.75938 191.557 0 193.317 0 195.487C0 197.657 1.75938 199.417 3.9297 199.417Z"
			fill={color}
		/>
		<path
			d="M104.299 99.7455C106.465 99.7455 108.221 97.9896 108.221 95.8236C108.221 93.6576 106.465 91.9017 104.299 91.9017C102.133 91.9017 100.377 93.6576 100.377 95.8236C100.377 97.9896 102.133 99.7455 104.299 99.7455Z"
			fill={color}
		/>
		<path
			d="M155.656 46.1064C152.503 42.9532 148.311 41.2173 143.853 41.2173C139.394 41.2173 135.202 42.954 132.05 46.1064C125.541 52.615 125.541 63.2048 132.05 69.7131C135.304 72.9674 139.578 74.5939 143.853 74.5939C148.127 74.5939 152.402 72.9666 155.656 69.7131C162.164 63.2044 162.164 52.6146 155.656 46.1064ZM150.11 64.1666C146.66 67.6166 141.045 67.6166 137.596 64.1666C134.145 60.7166 134.145 55.1025 137.596 51.6521C139.267 49.9806 141.489 49.0603 143.853 49.0603C146.216 49.0603 148.438 49.9806 150.11 51.6521C153.56 55.1025 153.56 60.7166 150.11 64.1666Z"
			fill={color}
		/>
		<path
			d="M48.9884 160.723C47.0494 159.757 44.6955 160.547 43.7298 162.485L39.0587 171.866C37.0275 175.945 32.9423 178.672 28.3962 178.983L22.9634 179.355C22.045 179.416 21.4411 178.959 21.1618 178.68C20.8825 178.4 20.4239 177.795 20.4864 176.878L20.8583 171.445C21.1696 166.9 23.897 162.814 27.9751 160.783L37.3556 156.112C39.2947 155.146 40.0837 152.792 39.1181 150.853C38.1529 148.914 35.7986 148.125 33.8595 149.091L24.479 153.762C17.9196 157.028 13.5337 163.598 13.0329 170.909L12.661 176.342C12.4602 179.274 13.5368 182.148 15.6149 184.226C17.5282 186.139 20.1161 187.204 22.8036 187.204C23.0345 187.204 23.2669 187.196 23.4989 187.18L28.9318 186.808C36.2427 186.308 42.813 181.922 46.0794 175.362L50.7505 165.982C51.7162 164.043 50.9271 161.689 48.9884 160.723Z"
			fill={color}
		/>
		<path
			d="M197.293 3.19524C195.453 1.38234 192.918 0.434294 190.343 0.601872L186.691 0.834685C153.949 2.92492 123.308 18.7293 102.623 44.1957L94.0274 54.7774L71.534 54.1168C71.4957 54.1157 71.457 54.1153 71.4191 54.1153C53.58 54.1153 36.8085 61.0621 24.194 73.6762L1.15571 96.715C0.0600024 97.8107 -0.288045 99.4493 0.268206 100.895C0.824457 102.342 2.17993 103.326 3.72759 103.404L52.4949 105.91L50.5066 108.358C49.5046 109.592 49.346 111.308 50.1058 112.704C50.8699 114.109 51.6706 115.492 52.5058 116.852L40.9409 130.581C39.9523 131.755 39.7394 133.398 40.3952 134.785C42.9214 140.123 46.2742 144.919 50.3617 149.04C54.5484 153.262 59.4441 156.715 64.9121 159.303C65.4465 159.556 66.0195 159.68 66.589 159.68C67.4722 159.68 68.348 159.381 69.0605 158.803C71.5519 156.782 74.4242 154.385 77.2023 152.067C79.1824 150.415 81.2082 148.724 83.1016 147.166C84.2317 147.846 85.3758 148.505 86.5371 149.137C87.1246 149.456 87.7688 149.614 88.4106 149.614C89.2645 149.614 90.1129 149.336 90.8153 148.79L93.4883 146.716L96.0047 195.689C96.0844 197.237 97.0676 198.592 98.5137 199.148C98.9715 199.324 99.4473 199.41 99.92 199.41C100.941 199.41 101.945 199.01 102.694 198.261L125.733 175.222C138.347 162.608 145.293 145.837 145.293 127.997V106.515L154.382 99.4618C181.62 78.3251 198.209 46.4524 199.895 12.0156L199.988 10.107C200.115 7.52728 199.133 5.00852 197.293 3.19524ZM12.9385 96.0243L29.7401 79.2227C40.8593 68.1036 55.6398 61.9739 71.3625 61.9586L87.802 62.4415L58.6183 98.3712L12.9385 96.0243ZM72.1773 146.045C70.1301 147.753 68.0312 149.504 66.0836 151.106C62.3164 149.066 58.9086 146.52 55.9304 143.517C53.046 140.609 50.591 137.297 48.6113 133.65L57.0785 123.598C59.6386 127.033 62.441 130.286 65.4683 133.334C65.4707 133.337 65.473 133.338 65.4754 133.341C65.4762 133.342 65.4769 133.343 65.4777 133.344C65.4789 133.345 65.4801 133.346 65.4812 133.347C68.8379 136.725 72.4484 139.825 76.2785 142.628C74.9262 143.751 73.5406 144.907 72.1773 146.045ZM137.451 127.997C137.451 143.741 131.32 158.543 120.187 169.676L103.386 186.478L101.041 140.856L137.451 112.602V127.997H137.451ZM192.062 11.6324C190.488 43.7797 175.002 73.5337 149.575 93.2653L88.0668 140.996C82.966 138.015 78.2117 134.496 73.8605 130.509L94.5973 109.772C96.1286 108.241 96.1286 105.757 94.5973 104.226C93.0657 102.694 90.5824 102.694 89.0508 104.226L68.3336 124.943C64.5246 120.726 61.1511 116.138 58.2789 111.23L108.711 49.1406C128.02 25.3675 156.625 10.6136 187.19 8.66283L190.842 8.43001C191.321 8.40033 191.641 8.63783 191.789 8.78314C191.936 8.92806 192.179 9.2433 192.156 9.72416L192.062 11.6324Z"
			fill={color}
		/>
	</svg>
);

Rocket.propTypes = {
	color: PropTypes.string,
};
Rocket.defaultProps = {
	color: 'black',
};

export default Rocket;