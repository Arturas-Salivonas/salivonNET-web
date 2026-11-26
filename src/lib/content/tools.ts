import type { Component } from 'svelte';
import AiAssistantSketch from '#lib/components/sketches/AiAssistantSketch.svelte';
import BookingSketch from '#lib/components/sketches/BookingSketch.svelte';
import BusinessDashboardSketch from '#lib/components/sketches/BusinessDashboardSketch.svelte';
import BusinessHubSketch from '#lib/components/sketches/BusinessHubSketch.svelte';
import CheckInSketch from '#lib/components/sketches/CheckInSketch.svelte';
import ChecksSketch from '#lib/components/sketches/ChecksSketch.svelte';
import CrmConnectorSketch from '#lib/components/sketches/CrmConnectorSketch.svelte';
import InvoiceChaserSketch from '#lib/components/sketches/InvoiceChaserSketch.svelte';
import NoCodeBuilderSketch from '#lib/components/sketches/NoCodeBuilderSketch.svelte';
import ReportsSketch from '#lib/components/sketches/ReportsSketch.svelte';
import SearchSketch from '#lib/components/sketches/SearchSketch.svelte';
import SeatBookingSketch from '#lib/components/sketches/SeatBookingSketch.svelte';
import ShiftPlannerSketch from '#lib/components/sketches/ShiftPlannerSketch.svelte';
import ShopSketch from '#lib/components/sketches/ShopSketch.svelte';
import TradingBotsSketch from '#lib/components/sketches/TradingBotsSketch.svelte';

export const categories = [
	{ id: 'front', label: 'Customer-facing' },
	{ id: 'ops', label: 'Operations' },
	{ id: 'data', label: 'Data & AI' },
	{ id: 'platforms', label: 'Platforms & bots' }
] as const;

export type CategoryId = (typeof categories)[number]['id'];

/** One selling point: the business benefit first, then how the tool delivers it. */
export interface Point {
	benefit: string;
	how: string;
}

/**
 * A tool, written up the way you would sell it.
 *
 * House rules for the copy:
 * - Each card stands alone as a product. No client names, and no system names a reader
 *   would have to look up.
 * - Every point starts from what the business gets.
 * - The thread running through all of them is automation: the tool takes the repetitive
 *   work, so people have time for the work that needs a person.
 */
export interface Tool {
	name: string;
	category: CategoryId;
	/** A short hook, shown above the name. */
	result: string;
	/** What it is, in one sentence. */
	pitch: string;
	points: readonly [Point, Point, Point];
	/** Who else it would suit. Completes the sentence "I'd build this for...". */
	fit: string;
	/** The animated wireframe at the top of the card. */
	sketch: Component;
}

export const tools: Tool[] = [
	// Customer-facing
	{
		name: 'Booking and payments',
		category: 'front',
		result: 'Open 24/7',
		pitch:
			"Customers pick a time, pay and get confirmed on their own, so your team isn't tied to the phone.",
		points: [
			{
				benefit: 'No double bookings.',
				how: 'It only offers slots that are really free, down to the room.'
			},
			{
				benefit: "Paid before it's booked.",
				how: 'Card or Apple Pay up front, and the invoice files itself.'
			},
			{
				benefit: 'The admin does itself.',
				how: 'Confirmations go out and the right person is assigned automatically, leaving staff free for the customers in front of them.'
			}
		],
		fit: 'Any business that takes appointments.',
		sketch: BookingSketch
	},
	{
		name: 'Seat and table booking',
		category: 'front',
		result: 'Cinemas, restaurants, venues',
		pitch:
			'Customers choose the location, the time and the exact seat or table, then book ahead in a few taps.',
		points: [
			{
				benefit: 'Pick the exact spot.',
				how: 'A live map shows which seats or tables are still free.'
			},
			{
				benefit: 'Every venue, one flow.',
				how: 'Locations, dates and sittings all run through the same simple steps.'
			},
			{
				benefit: 'It fills itself.',
				how: 'Bookings arrive paid and confirmed, so nobody spends the evening taking them by phone.'
			}
		],
		fit: 'Anything sold by the seat, table or time slot.',
		sketch: SeatBookingSketch
	},
	{
		name: 'Self check-in',
		category: 'front',
		result: 'At the desk and online',
		pitch:
			'A check-in screen that runs on a tablet at reception, plus an online version people complete before they arrive.',
		points: [
			{
				benefit: 'Done before they arrive.',
				how: 'Send a link and customers fill in their details and questions at home.'
			},
			{
				benefit: 'Seconds at the desk.',
				how: "If it's done online, arriving takes one tap. If not, the tablet walks them through it."
			},
			{
				benefit: 'Nothing to retype.',
				how: 'Answers, signature and card details go straight into their record, so reception can greet people instead of typing.'
			}
		],
		fit: 'Clinics, hotels, gyms: anywhere with a front desk and a form.',
		sketch: CheckInSketch
	},
	{
		name: 'Lightweight online shop',
		category: 'front',
		result: 'No heavy platform',
		pitch:
			'A fast, lean shop built into your own site, for when WooCommerce or Shopify is more than you need.',
		points: [
			{
				benefit: 'Only what you need.',
				how: 'No plugin pile and no platform to fight, so it stays quick and easy to change.'
			},
			{
				benefit: 'Orders run themselves.',
				how: 'Each sale is passed to fulfilment, your records and your CRM, and the emails go out, without anyone copying a thing.'
			},
			{
				benefit: 'Grows with you.',
				how: 'Start with a few products and add features as the business does.'
			}
		],
		fit: 'Businesses selling a focused range who want speed and control.',
		sketch: ShopSketch
	},
	{
		name: 'Smart search',
		category: 'front',
		result: 'Finds it despite typos',
		pitch:
			'A search box that understands what people mean, not only what they type, so they find it themselves instead of asking you.',
		points: [
			{
				benefit: 'Forgives spelling.',
				how: 'Typos, near-misses and other words for the same thing still find the right page.'
			},
			{
				benefit: 'Answers as you type.',
				how: 'Instant suggestions, with the pages you choose pinned to the top.'
			},
			{
				benefit: "Knows what you're after.",
				how: 'Type "price" and prices come first. Type a name and people do.'
			}
		],
		fit: "Any site where people leave because they can't find things.",
		sketch: SearchSketch
	},

	// Operations
	{
		name: 'Shift planner',
		category: 'ops',
		result: 'Any team, any number of sites',
		pitch: "It drafts next week's rota by itself, however many staff, sites and rules you have.",
		points: [
			{
				benefit: 'Your rules, however complex.',
				how: 'Contract days, cover and who works with whom are checked automatically.'
			},
			{
				benefit: "It knows what's booked.",
				how: 'It reads the real diary, so nobody is rostered for an empty room.'
			},
			{
				benefit: 'Hours back for the manager.',
				how: 'One click shares the finished rota in the app your staff already check.'
			}
		],
		fit: 'Any team still planning shifts in a spreadsheet.',
		sketch: ShiftPlannerSketch
	},
	{
		name: 'Invoice chaser',
		category: 'ops',
		result: 'Replaced a spreadsheet',
		pitch:
			'A live board of unpaid invoices that tells the team who to chase today, without anyone keeping a list.',
		points: [
			{
				benefit: 'Nothing slips.',
				how: 'Every unpaid invoice gets a schedule: first chase at day 7, then weekly, then escalated.'
			},
			{
				benefit: 'It updates itself.',
				how: 'It syncs with billing every hour, and paid invoices drop off on their own.'
			},
			{
				benefit: 'One shared history.',
				how: 'Every call and email is logged, so nobody chases the same person twice.'
			}
		],
		fit: 'Any business owed money by more than a handful of customers.',
		sketch: InvoiceChaserSketch
	},
	{
		name: 'Checks and audits',
		category: 'ops',
		result: 'Replaced paper',
		pitch:
			'Daily checks, equipment tests and fault logs on a tablet, with the chasing and the record-keeping done for you.',
		points: [
			{
				benefit: "Missed checks can't hide.",
				how: 'A check turns late at noon and missed by evening, on a calendar everyone sees.'
			},
			{
				benefit: 'A fail starts the fix.',
				how: 'A failed test opens a fault and emails the person in charge, automatically.'
			},
			{
				benefit: 'Ready for inspection.',
				how: 'A year of records and a PDF report, without anyone compiling them.'
			}
		],
		fit: 'Kitchens, clinics, workshops: anywhere checks are still on paper.',
		sketch: ChecksSketch
	},
	{
		name: 'Reports and alerts',
		category: 'ops',
		result: 'Runs on its own',
		pitch: 'It watches your data and tells the right people the moment something needs attention.',
		points: [
			{
				benefit: 'Reports that write themselves.',
				how: 'Scheduled reports arrive by email, already formatted, with nothing to run.'
			},
			{
				benefit: 'Alerts as it happens.',
				how: 'A cancellation or a failed check reaches the right person straight away.'
			},
			{
				benefit: 'Nobody has to remember.',
				how: 'The checks someone used to do by hand every week now just happen.'
			}
		],
		fit: 'Any rule or number someone has to remember to check.',
		sketch: ReportsSketch
	},

	// Data & AI
	{
		name: 'Business dashboard',
		category: 'data',
		result: 'Every source, one screen',
		pitch:
			'Connect as many data sources as you like to one dashboard, and see everything in one place instead of logging in to each platform one by one.',
		points: [
			{
				benefit: 'No limit on sources.',
				how: 'Ads, analytics, search, calls, bookings, sales, spreadsheets: if it holds data, it can be plugged in.'
			},
			{
				benefit: 'What a sale really costs.',
				how: 'It follows people from ad click to paid booking, so you see which spend works.'
			},
			{
				benefit: 'Always up to date.',
				how: 'The numbers refresh themselves, so nobody spends hours building reports.'
			}
		],
		fit: 'Owners tired of opening five platforms to answer one question.',
		sketch: BusinessDashboardSketch
	},
	{
		name: 'CRM connector',
		category: 'data',
		result: 'Works with any CRM',
		pitch:
			'It links the system you run the business on to whichever CRM you use (HubSpot, Salesforce, Zoho or another), so sales and marketing see what really happened.',
		points: [
			{
				benefit: 'Nothing typed twice.',
				how: 'Every booking, sale and cancellation appears in the CRM by itself.'
			},
			{
				benefit: 'Follow-ups on autopilot.',
				how: 'Reminders and win-back messages go out at the right moment, because the CRM finally knows who did what.'
			},
			{
				benefit: 'Lost customers get a second chance.',
				how: 'A cancellation triggers a rebook link first, and only then a task for a person.'
			}
		],
		fit: "Any business whose CRM can't see what its main system knows.",
		sketch: CrmConnectorSketch
	},
	{
		name: 'AI assistant',
		category: 'data',
		result: 'Answers from your documents',
		pitch:
			'A chatbot on your intranet that answers staff questions from your own documents and policies.',
		points: [
			{
				benefit: "Your knowledge, not the internet's.",
				how: "It answers from the company's own files, not from guesswork."
			},
			{
				benefit: 'No new app.',
				how: 'It sits where staff already work.'
			},
			{
				benefit: 'Fewer interruptions.',
				how: 'People get an answer in seconds instead of emailing a colleague and waiting.'
			}
		],
		fit: 'Companies whose answers are buried in files nobody reads.',
		sketch: AiAssistantSketch
	},

	// Platforms & bots
	{
		name: 'Business hub',
		category: 'platforms',
		result: 'Projects, people, money',
		pitch: 'One system to run a professional firm, instead of email, spreadsheets and memory.',
		points: [
			{
				benefit: 'Every job has a next step.',
				how: 'Stage, owner and blockers in one place, with a summary email each morning.'
			},
			{
				benefit: 'HR without the spreadsheet.',
				how: "Holiday, leave and who's in today."
			},
			{
				benefit: 'Money that chases itself.',
				how: 'Invoices are drafted in your accounting software, payments tracked and overdue fees flagged.'
			}
		],
		fit: 'Consultancies and studios run on email and Excel.',
		sketch: BusinessHubSketch
	},
	{
		name: 'No-code builder',
		category: 'platforms',
		result: 'No developer needed',
		pitch:
			'A drag-and-drop builder that lets non-technical staff create and publish pages and digital assets themselves.',
		points: [
			{
				benefit: 'Launch today, not next sprint.',
				how: 'Marketing builds and publishes without raising a ticket.'
			},
			{
				benefit: 'Hard to get wrong.',
				how: 'Pages are made from ready-made blocks, so everything stays consistent.'
			},
			{
				benefit: 'Days, not a week.',
				how: 'One team cut delivery from 7 days to 2 and dropped most of its outside suppliers.'
			}
		],
		fit: 'Teams waiting on developers or agencies for every change.',
		sketch: NoCodeBuilderSketch
	},
	{
		name: 'Trading bots',
		category: 'platforms',
		result: 'Tested before real money',
		pitch: 'Bots that watch markets around the clock and act on fixed rules, not gut feeling.',
		points: [
			{
				benefit: 'Proven on history first.',
				how: 'Each strategy is tested on 21 years of real prices and fees.'
			},
			{
				benefit: 'Always watching.',
				how: 'Stocks, crypto and prediction markets, including what the big wallets are doing.'
			},
			{
				benefit: 'Safety before profit.',
				how: 'Hard limits, and paper trading before any real money.'
			}
		],
		fit: 'Anything that means watching numbers all day and reacting fast.',
		sketch: TradingBotsSketch
	}
];
