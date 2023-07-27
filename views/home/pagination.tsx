import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PaginationProps {
    total: number
    current: number
    pageSize: number
}

export default function Pagination({ total, current, pageSize }: PaginationProps) {
    if (current < 1) {
        current = 1
    }
    return (
        <nav
            className="flex items-center justify-between  mt-10 bg-background  py-3"
            aria-label="Pagination"
        >
            <div className="hidden sm:block">
                <p className="text-sm text-primary">
                    Showing <span className="font-medium">{current}</span> to <span className="font-medium">{current * pageSize}</span> of{' '}
                    <span className="font-medium">{total}</span> results
                </p>
            </div>
            <div className="flex flex-1 justify-between sm:justify-end">
                <Button asChild variant="outline" className="mr-2">
                    <Link
                        href={`/?page=${current - 1}`}

                    >
                        Previous
                    </Link>
                </Button>
                <Button asChild variant="outline">

                    <Link
                        href={`/?page=${current + 1}`}
                    >
                        Next
                    </Link>
                </Button>
            </div>
        </nav>
    )
}
