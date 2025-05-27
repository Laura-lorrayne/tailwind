import { SettingsTabs } from "@/components/SettingsTabs";

import * as Input from "@/components/Input";

import { Mail } from "lucide-react";
export default function Home() {
    return (
        <>
            <h1 className="to-zinc-900 text-3xl font-medium">Settings</h1>

            <SettingsTabs />
            <div className="mt-6 flex flex-col">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-medium text-zinc-900 dark:text-white">
                            Personal info
                        </h2>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                            Update your photo and personal details here.
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm bg-violet-600 text-white hover:bg-violet-700"
                            form="settings"
                        >
                            Save
                        </button>
                    </div>
                </div>
                <form
                    id="settings"
                    action=""
                    className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-800"
                >
                    <div className="grid gap-3 lg:grid-cols-form">
                        <label
                            htmlFor="firstName"
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
                        >
                            Name
                        </label>
                        <div className="grid gap-6 lg:grid-cols-2">
                            <Input.Root>
                                <Input.Control
                                    name="firstName"
                                    id="firstName"
                                    type="text"
                                    defaultValue="Diego"
                                />
                            </Input.Root>
                            <Input.Root>
                                <Input.Control
                                    name="lastName"
                                    type="text"
                                    defaultValue="Fernandes"
                                />
                            </Input.Root>
                        </div>
                    </div>
                    <div className="grid gap-3 pt-5 lg:grid-cols-form">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
                        >
                            Email address
                        </label>
                        <div className="flex gap-3">
                            <Input.Root>
                                <Input.Prefix>
                                    <Mail className="h-5 w-5 text-zinc-500" />
                                </Input.Prefix>
                                <Input.Control
                                    id="email"
                                    type="email"
                                    name="email"
                                    defaultValue="laura.f@gmail.com"
                                />
                            </Input.Root>
                        </div>
                    </div>
                    <div className="grid gap-3 pt-5 lg:grid-cols-form">
                        <label
                            htmlFor="photo"
                            className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100"
                        >
                            Your photo
                            <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
                                This will be displayed on your profile.
                            </span>
                        </label>
                    </div>
                    <div className="grid gap-3 pt-5 lg:grid-cols-form">
                        <label
                            htmlFor="role"
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
                        >
                            Role
                        </label>
                        <div className="flex gap-3">
                            <Input.Root>
                                <Input.Control
                                    name="role"
                                    id="role"
                                    defaultValue="Product Designer"
                                />
                            </Input.Root>
                        </div>
                    </div>
                    <label className="grid gap-3 pt-5 lg:grid-cols-form">
                        <span className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100">
                            Country
                        </span>
                    </label>
                    <label className="grid gap-3 pt-5 lg:grid-cols-form">
                        <span className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100">
                            Timezone
                        </span>
                    </label>
                    <div className="grid gap-3 pt-5 lg:grid-cols-form">
                        <label
                            htmlFor="bio"
                            className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100"
                        >
                            Bio
                            <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
                                Write a short introduction.
                            </span>
                        </label>
                        <div className="flex flex-col gap-3">
                            <div className="grid gap-3 lg:grid-cols-2">
                                <div className="flex items-center gap-1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-2 pt-5">
                        <button
                            type="button"
                            className="rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm bg-violet-600 text-white hover:bg-violet-700"
                            form="settings"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
