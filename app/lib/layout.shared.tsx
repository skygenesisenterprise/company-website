import { NavLinks } from "@/components/NavLinks";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: (
				<div className="flex items-center gap-2">
					<span>Sky Genesis Enterprise</span>
				</div>
			),
			url: "https://skygenesisenterprise.com",
			children: <NavLinks />,
		},
		githubUrl: "https://github.com/skygenesisenterprise/company-website",
	};
}
